const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
//Require Models to use
const logger = require('../../utility/logger');
const AuthGuard = require('../../config/passport').isAuthenticated(passport);
const ApplicationConfig = require('../../config/models/application-config');

const router = express.Router();

//Configuration related routes
router.get('/getAuthenticationConfig', (req, res) => {
    ApplicationConfig.findOne({
        name: 'auth'
    }, (err, config) => {
        if (err) throw err;
        else if (config != null) {
            res.json({
                success: true,
                message: "Config loaded successfully!!",
                data: config,
            });
        } else {
            res.json({
                success: false,
                message: "Some Error Occured"
            })
        }
    });
});

router.post('/setAuthenticationConfig', (req, res) => {
    let config = req.body;
    if (config != null) {
        let query = {
            config: config,
            modifiedAt: new Date(),
        }
        ApplicationConfig.updateAuthConfig(query, (jsonRes) => {
            res.json(jsonRes);
        });
    }
});



module.exports = router;