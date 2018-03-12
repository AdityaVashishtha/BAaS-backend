const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const ApplicationsSchemaStructure = require('../../config/models/application-schema-structure');
const RouteStructure = require('../../config/models/route-structure');
const ApplicationConfig = require('../../config/models/application-config');
const APP_CONFIG = require('../../config/application');
const UtilityFunction = require('../../utility/utilityFunctions');
/* TODO - Change delete method to delete from post */
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
            if (isLoggedIn && data.operationType === 'delete') {
                let Schema, query;
                try {
                    Schema = mongoose.model(data.schemaName);
                } catch (err) {
                    Schema = ApplicationsSchemaStructure.getSchemaModel(data.schemaName, {});
                }
                let requestBodyFromStructure = data.requestBody;
                let requestBodyActual = Object.keys(req.body);
                query = Schema.remove();
                for (i = 0; i < data.constraints.length; i++) {
                    let item = data.constraints[i];
                    //console.log(item);
                    let r_attr = item.requestAttribute;
                    let s_attr = item.schemaAttribute;
                    let isChek = requestBodyActual.indexOf(r_attr);
                    if (isChek >= 0) {
                        query = UtilityFunction.applyConstraintOnQuery(query,item.constraint.toString(),s_attr,req.body[r_attr]);
                    } else {
                        res.json({
                            success: false,
                            message: "ERROR: Request Body Does not containt right parameters",
                        });
                        return;
                    }
                }
                query.exec((err, data) => {
                    if (err) {
                        if (err.code == 2) {
                            res.json({
                              success: false,
                              message: "Error in enum attributes constraint."
                            });
                        } else {
                            res.json({
                              success: false,
                              message: "Some Error in request attributes."
                            });
                        }
                        console.log(err);
                    }
                    else if (data) {
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

module.exports = router