const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const validator = require('validator');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const ApplicationsSchemaStructure = require('../../config/models/application-schema-structure');
const RouteStructure = require('../../config/models/route-structure');
const ApplicationConfig = require('../../config/models/application-config');
const APP_CONFIG = require('../../config/application');


router.post('/:schema/:routeName', (req, res) => {
    let token = '',
        isLoggedIn = false;
    if (req.headers.authorization)
        token = req.headers.authorization.split(' ')[1];
    isLoggedIn = loggedIn(token);
    let query = {
        name: req.params.routeName,
        schemaName: req.params.schema
    };
    RouteStructure.findOne(query, (err, data) => {
        if (err) throw err;
        else if (data) {
            if (data.accessControl == 'public') {
                isLoggedIn = true;
            } else if (data.accessControl == 'admin') {
                isLoggedIn = require('../config/passport').isLoggedIn(token);
            }
            isLoggedIn = checkForUserBasedSession(req.body, data, returnUserFromToken(token));
            if (typeof isLoggedIn == 'object') {
                req.body = isLoggedIn;
                isLoggedIn = true;
            }
            console.log('-- Request After Custom User based session --');
            console.log(req.body);
            if (isLoggedIn && data.operationType === 'find') {
                let Schema, query;
                try {
                    Schema = mongoose.model(data.schemaName);
                } catch (err) {
                    Schema = ApplicationsSchemaStructure.getSchemaModel(data.schemaName, {});
                }
                let requestBodyFromStructure = data.requestBody;
                let requestBodyActual = Object.keys(req.body);
                query = Schema.find();
                for (i = 0; i < data.constraints.length; i++) {
                    let item = data.constraints[i];
                    let r_attr = item.requestAttribute;
                    let s_attr = item.schemaAttribute;
                    let isChek = requestBodyActual.indexOf(r_attr);
                    if (isChek >= 0) {
                        if (item.constraint.toString() === 'equal') {
                            console.log("Equal Modifier")
                            query = query.where(s_attr, req.body[r_attr].toString())
                        } else if (item.constraint.toString() === 'greater-than') {
                            console.log("Greater Modifier")
                            query = query.where(s_attr).gte(req.body[r_attr]);
                        } else if (item.constraint.toString() === 'less-than') {
                            console.log("Lesser Modifier")
                            query = query.where(s_attr).lte(req.body[r_attr].toString())
                        } else if (item.constraint.toString() === 'regex') {
                            console.log("Regex Modifier");
                            try {
                                query = query.where(s_attr).regex(new RegExp(req.body[r_attr]));
                            } catch (error) {
                                console.log("SOME ERROR - CHECK");
                                query = query.where(s_attr, "");
                                console.log(error);
                            }
                        } else {
                            console.log({
                                success: false,
                                message: "Error: Some huge failure !! -- TODO"
                            });
                        }
                    } else {
                        res.json({
                            success: false,
                            message: "ERROR: Request Body Does not containt right parameters",
                        });
                        return;
                    }
                }
                query.exec((err, data) => {
                    if (err) throw err;
                    if (data) {
                        res.json({
                            success: true,
                            count: data.length,
                            data: data,
                        });
                    } else {
                        res.json({
                            success: false,
                            message: "Some Error in retrieval",
                        })
                    }
                });
            } else {
                res.status(401).send();
            }
        } else {
            res.status(404).send();
        }
    });
});

router.get('/findById/:routeName/:schemaName/:id', (req, res) => {
    let idForSchema = req.params.id;
    let schemaName = req.params.schemaName;
    let token = '',
        isLoggedIn = false;
    if (req.headers.authorization)
        token = req.headers.authorization.split(' ')[1];
    isLoggedIn = loggedIn(token);
    let query = {
        name: req.params.routeName,
        schemaName: schemaName,
    };
    RouteStructure.findOne(query, (err, data) => {
        if (err) throw err;
        else if (data) {
            if (data.accessControl == 'public') {
                isLoggedIn = true;
            } else if (data.accessControl == 'admin') {
                isLoggedIn = require('../config/passport').isLoggedIn(token);
            }
            isLoggedIn = checkForUserBasedSession(req.body, data, req.user);
            if (typeof isLoggedIn == 'object') {
                req.body = isLoggedIn;
                isLoggedIn = true;
            }
            console.log('-- Request After Custom User based session --');
            console.log(req.body);
            if (isLoggedIn && idForSchema) {
                let Schema, query;
                try {
                    Schema = mongoose.model(data.schemaName);
                } catch (err) {
                    Schema = ApplicationsSchemaStructure.getSchemaModel(data.schemaName, {});
                }
                idForSchema = validator.isHexadecimal(idForSchema) && idForSchema.length == 24 ? idForSchema : null;
                //console.log(idForSchema);
                Schema.findById(idForSchema, (err, data) => {
                    if (err) throw err;
                    if (data) {
                        res.json({
                            success: true,
                            count: data.length,
                            data: data,
                        });
                    } else {
                        res.json({
                            success: false,
                            message: "Some Error in retrieval",
                        })
                    }
                });
            } else {
                res.status(401).send();
            }
        } else {
            res.status(404).send();
        }
    });
});

function checkForUserBasedSession(request, routeStructure, userSession) {
    let requestSession = request.session;
    if (routeStructure.userBasedSession && routeStructure.userBasedSession.isEnable) {
        console.log("User Based Session Enabled");
        if (requestSession && ((userSession != null && userSession))) {
            console.log("User Based Session Enabled");
            let keys = (routeStructure.userBasedSession.sessionAttribute);
            for (let i = 0; i < keys.length; i++) {
                console.log('keys ' + keys[i]);
                if (requestSession[keys[i]]) {
                    console.log("Session Check " + userSession[keys[i]] + "  " + requestSession[keys[i]]);
                    if (userSession[keys[i]] != requestSession[keys[i]]) {
                        return false;
                    } else {
                        //TODO Add user session variable as insert value
                        console.log('Before replace text');
                        if (request[keys[i]]) {
                            //console.log(request);
                            //request = JSON.parse(JSON.stringify(request).replace('$__'+keys[i],userSession[keys[i]]));
                            request[keys[i]] = userSession[keys[i]];
                            //console.log(request);
                        } else {
                            return false;
                        }
                    }
                } else {
                    return false;
                }
            }
        } else {
            return false;
        }
    } else {
        console.log("User Based Session Disabled");
        return true;
    }
    return request;
}

function guardRoute(req, res, next) {
    token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, APP_CONFIG.app_secret, function (err, decoded) {
        if (err) {
            res.status(401).send();
        } else if (decoded) {
            next();
        }
    });
}

function loggedIn(token) {
    return jwt.verify(token, APP_CONFIG.app_secret, function (err, decoded) {
        if (err) {
            return false;
        } else if (decoded.authType = 'api.user') {
            //console.log(decoded);
            return true;
        }
    });
}

function returnUserFromToken(token) {
    return jwt.verify(token, APP_CONFIG.app_secret, function (err, decoded) {
        if (err) {
            return false;
        } else if (decoded.authType = 'api.user') {
            return decoded;
        }
    });
}

module.exports = router