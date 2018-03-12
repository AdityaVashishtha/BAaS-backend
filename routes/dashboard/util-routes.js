const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
//Require Models to use
const logger = require('../../utility/logger');
const DashboardUser = require('../../config/models/dashboard-user');
const APP_CONFIG = require('../../config/application');
const AuthGuard = require('../../config/passport').isAuthenticated(passport);
const ApplicationsSchemaStructure = require('../../config/models/application-schema-structure');
const ApplicationConfig = require('../../config/models/application-config');
//after routes added
const RouteStructure = require('../../config/models/route-structure');
const AuthRoute = require('../dashboard/auth');
// Declaration of constants 
USER_TABLE_NAME = 'authuser';

const router = express.Router();


//Utilities
router.get('/getApplicationDetails', AuthGuard, (req, res) => {
    res.json({
        success: true,
        message: "Application Details Fetched",
        config: APP_CONFIG
    });
});

router.post('/exportToCSV',AuthGuard,(req,res)=>{    
    let reqbody = req.body;;
    console.log(reqbody);
    // var query = ApplicationsSchemaStructure.findOne({
    //     //name: tableName
    // });
    // query.exec((err, data) => {
    //     if (err) throw err;
    //     else if (data !== null) {
    //         let schema;
    //         try {
    //             schema = mongoose.model(tableName);
    //         } catch (err) {
    //             schema = ApplicationsSchemaStructure.getSchemaModel(tableName, data.structure);
    //         }
    //         query = schema.find();
    //         query.exec((err, rows) => {
    //             if (err) throw err;
    //             else {
    //                 res.json({
    //                     success: true,
    //                     data: {
    //                         structure: data.structure,
    //                         rows: rows
    //                     },
    //                     message: "Fetch Succesfull!!"
    //                 });
    //             }
    //         });
    //     } else {
    //         res.json({
    //             success: false,
    //             data: null,
    //             message: "Nothing found!!"
    //         });
    //     }
    // });
});

router.get('/logs', (req, res) => {
    let logs = logger.getFreshLOG();    
    res.json({
        success: true,
        logs: logs,
        count: logs.length
    });
});

router.get('/getUserProfile', AuthGuard, (req, res) => {
    console.log(req.user);
    res.json({
        test: true
    });
});


module.exports = router;