const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const ApplicationsSchemaStructure = require('../../config/models/application-schema-structure');
const RouteStructure = require('../../config/models/route-structure');
const APP_CONFIG = require('../../config/application');
const UtilityFunction = require("../../utility/utilityFunctions");
// Default insert route
router.post('/:schema/:routeName', (req, res) => {
    console.log(req.body);
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
            let isUserSessionEnabled;
            if(data.userBasedSession && data.userBasedSession.isEnable) { 
                req.user = returnUserFromToken(token);               
                isUserSessionEnabled = UtilityFunction.checkForUserBasedSession(req.body, data, req.user);
                //console.log(req.user)
                if (typeof isUserSessionEnabled == 'object') {
                    req.body = isUserSessionEnabled;
                    isLoggedIn = true;
                    //console.log('Request After Custom User based session');
                    //console.log(req.body);
                } else if(isUserSessionEnabled === false) {
                    isLoggedIn = false;
                }
            }
            if (isLoggedIn && data.operationType === 'insert') {
                let Schema, query;
                try {
                    Schema = mongoose.model(data.schemaName);
                } catch (err) {
                    Schema = ApplicationsSchemaStructure.getSchemaModel(data.schemaName, {});
                }
                let requestBodyFromStructure = data.requestBody;
                let requestBodyActual = Object.keys(req.body);
                let insertDoc = {};
                if (req.body.insertDoc) {
                    insertDoc = req.body.insertDoc;
                } else {
                    res.json({
                        success: false,
                        message: "Request body for insert does not contain insertDoc field/object"
                    });
                    return;
                }
                console.log(insertDoc);
                //res.json({test: true});
                query = insertDoc;
                schemaName = data.schemaName;
                ApplicationsSchemaStructure.layeredValidationBeforeInsert(query, schemaName, (err, result) => {
                    if (err) throw err;
                    else if (result == null) {
                        res.json({
                            success: false,
                            message: "Some error occured !!",
                        });
                    } else if (result.error) {
                        // do stuff here 
                        res.json({
                            success: false,
                            message: result.message,
                        });
                    } else {
                        let schema;
                        try {
                            schema = mongoose.model(schemaName);
                        } catch (err) {
                            schema = ApplicationsSchemaStructure.getSchemaModel(schemaName, {
                                any: {}
                            });
                        }
                        query = result.row;
                        delete query._id;
                        query._insertAt = new Date().toDateString() + ' ' + new Date().toTimeString();
                        query._updated = new Date().toDateString() + ' ' + new Date().toTimeString();
                        let doc = new schema(query);
                        doc.save(err => {
                            if (err) throw err;
                            else {
                                res.json({
                                    success: true,
                                    message: "Data Inserted Successfully!!"
                                });
                            }
                        });
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

function guardRoute(req, res, next) {
    token = req.headers.authorization.split(' ')[1];
    //console.log(token)    
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
            console.log(decoded);
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