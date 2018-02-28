const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');

const logger = require('../../utility/logger');
const AuthGuard = require('../../config/passport').isAuthenticated(passport);

//Require Models to use
const RouteStructure = require('../../config/models/route-structure');

const router = express.Router();

//Route related routes
router.post('/addRoute', AuthGuard, (req, res) => {
    let routeModel = req.body;
    let routeData;    
    if (routeModel.operationType == 'findById') {
        routeData = {
            name: routeModel.name,
            schemaName: routeModel.schemaName,
            operationType: routeModel.operationType,
            requestByJSON: false,
            accessControl: routeModel.accessControl,
            createdAt: new Date(),
            requestMethod: 'GET',
            userBasedSession: routeModel.userBasedSession
        }
    } else {
        routeData = {
            name: routeModel.name,
            schemaName: routeModel.schemaName,
            operationType: routeModel.operationType,
            requestByJSON: true,
            requestBody: routeModel.requestBody,
            constraints: routeModel.constraint,
            accessControl: routeModel.accessControl,
            createdAt: new Date(),
            requestMethod: 'POST',
            userBasedSession: routeModel.userBasedSession
        }
    }
    let route = new RouteStructure(routeData);    
    query = {
        name: routeData.name,
        schemaName: routeData.schemaName
    };    
    RouteStructure.findOne(query, (err, data) => {
        if (err) throw err;
        else if (data) {
            res.json({
                success: false,
                message: "Route with same name and schema already exists!!",
            });
        } else {
            route.save(err => {
                if (err) throw err;
                else {
                    res.json({
                        success: true,
                        message: "Route created successfully!!",
                    });
                }
            });
        }
    });
});

router.post('/deleteRoute', AuthGuard, (req, res) => {
    if (req.body) {
        let query = {
            name: req.body.name,
            schemaName: req.body.schemaName
        };
        RouteStructure.remove(query, (err, data) => {
            if (err) throw err;
            else if (data != null && data.n > 0) {
                res.json({
                    success: true,
                    message: "Route Deleted Successfully!!",
                });
            } else {
                res.json({
                    success: false,
                    message: "Database Error: Route not deleted!!"
                });
            }
        });
    } else {
        res.json({
            success: false,
            message: "Error: Request body is empty!"
        });
    }
});

router.post('/getRoutes', AuthGuard, (req, res) => {
    let schemaName = req.body.schemaName;
    query = {
        schemaName: schemaName
    };
    RouteStructure.find(query, (err, data) => {
        if (err) throw err;
        else if (data) {
            res.json({
                success: true,
                message: "Routes Fetch success",
                data: data,
            })
        } else {
            res.json({
                success: false,
                message: "Route fetch unsuccessfull",
            })
        }
    })
});


//Exporting dashboard Route
module.exports = router;