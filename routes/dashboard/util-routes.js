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