const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const validator = require('validator');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const ApplicationsSchemaStructure = require('../../config/models/application-schema-structure');
const RouteStructure = require('../../config/models/route-structure');
const ApplicationConfig = require('../../config/models/application-config');

require('../../config/passport-oauth-google')(passport);
require('../../config/passport-facebook')(passport);

const APP_CONFIG = require('../../config/application');
var tableName = 'authUser';
var authConfigs = {
    authTable: 'authUser',
    tableStructure: {

    },
    emailLogin: true,
    verifyEmail: false,
    tokenExpiryInterval: '1h'
}

router.post('/register', (req, res) => {
    let user = req.body.user;
    //console.log(user)
    if (user && user.username && user.password) {
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(user.password, salt);
        let newUser = {};
        newUser.password = hash;
        newUser.createdAt = new Date().toString();
        newUser.signedIn = new Date().toString();
        newUser.provider = 'email/username';
        newUser.identifier = user.username;
        let authConfig = ApplicationConfig.getAuthConfig((err, config) => {
            let validateUserField = false;
            if (config.primaryLogin == "email")
                validateUserField = validator.isEmail(newUser.identifier);
            else
                validateUserField = validator.isAlphanumeric(newUser.identifier);
            console.log(config);
            if (validateUserField) {
                let Schema;
                try {
                    Schema = mongoose.model(tableName);
                } catch (err) {
                    Schema = ApplicationsSchemaStructure.getSchemaModel(tableName, {});
                }
                query = {
                    identifier: newUser.identifier
                };
                let newUserRow = Schema(newUser);
                Schema.findOne(query, (err, data) => {
                    if (err) throw err;
                    else if (data) {
                        //console.log(data);
                        res.json({
                            success: false,
                            message: "Email/Username already in use."
                        });
                    } else {
                        newUserRow.save(err => {
                            if (err) throw err;
                            else {
                                res.json({
                                    success: true,
                                    message: "User registered succesfully"
                                });
                            }
                        });
                    }
                });
            } else {
                res.json({
                    success: false,
                    exception: {
                        exceptionType: "NotValidEmail",
                        exceptionMessage: "Provide string was not a valid Username/Email",
                    }
                });
            }
        });

    } else {
        res.json({
            success: false,
            exception: {
                exceptionType: "BodyEmpty",
                exceptionMessage: "Request body for register was empty.",
            }
        })
    }
});

router.post('/login', (req, res) => {
    let user = req.body.user;
    //console.log(user)
    if (user && user.username && user.password) {
        let Schema;
        try {
            Schema = mongoose.model(authConfigs.authTable);
        } catch (err) {
            Schema = ApplicationsSchemaStructure.getSchemaModel(authConfigs.authTable, {});
        }
        query = {
            identifier: user.username
        }
        Schema.findOne(query, (err, data) => {
            if (err) throw err;
            else if (data) {
                let newUser = data._doc;
                let isMatch = bcrypt.compareSync(user.password, newUser.password);
                if (isMatch) {
                    newUser.password = null;
                    jwt.sign(newUser, APP_CONFIG.app_secret, {
                        expiresIn: authConfigs.tokenExpiryInterval
                    }, function (err, token) {
                        if (err) throw err;
                        else {
                            newUser.authType = 'api.user';
                            res.json({
                                success: true,
                                data: {
                                    token: 'Bearer ' + token,
                                    user: newUser
                                },
                                message: "User Succesfully logged in"
                            });
                        }
                    });
                } else {
                    res.json({
                        success: false,
                        message: 'Invalid Username or password'
                    });
                }
            } else {
                res.json({
                    success: false,
                    message: 'Invalid Username or password'
                })
            }
        });
    } else {
        res.json({
            success: false,
            exception: {
                exceptionType: "BodyEmpty",
                exceptionMessage: "Request body for register was empty.",
            }
        })
    }
});

function isGoogleAuthEnabled(req, res, next) {
    ApplicationConfig.getAuthConfig((err, authConfig) => {
        if (err) throw err;
        if (authConfig) {
            if (authConfig.googleLoginOption.isEnabled) {
                next();
            } else {
                res.status(404).send("<h1>Resource NOT found</h1>");
            }
        } else {
            res.status(500).send();
        }
    });
}

function isFacebookAuthEnabled(req, res, next) {
    ApplicationConfig.getAuthConfig((err, authConfig) => {
        if (err) throw err;
        if (authConfig) {
            if (authConfig.facebookLoginOption.isEnabled) {
                next();
            } else {
                res.status(404).send("<h1>Resource NOT found</h1>");
            }
        } else {
            res.status(500).send();
        }
    });
}


router.get('/google', isGoogleAuthEnabled,
    passport.authenticate('google', {
        scope: ['https://www.googleapis.com/auth/plus.login']
    }));

router.get('/google/redirect',
    passport.authenticate('google', {
        session: false
    }),
    function (req, res) {
        //console.log("Google Callback Returned");
        let newUser = req.user._json;
        if (newUser == null) {
            res.status(404).send();
        } else {
            jwt.sign(newUser, APP_CONFIG.app_secret, {
                expiresIn: authConfigs.tokenExpiryInterval
            }, function (err, token) {
                if (err) throw err;
                else {
                    newUser.authType = 'api.user';
                    res.json({
                        success: true,
                        data: {
                            token: 'Bearer ' + token,
                            user: newUser
                        },
                        message: "User Succesfully logged in"
                    });
                }
            });
        }
    });

// router.get('/auth/facebook',isFacebookAuthEnabled,
//   passport.authenticate('facebook', { scope: ['https://www.googleapis.com/auth/plus.login'] }));

router.get('/facebook', isFacebookAuthEnabled,
    passport.authenticate('facebook'));

// app.get('/auth/facebook/callback',
//   passport.authenticate('facebook', { successRedirect: '/',
//                                       failureRedirect: '/login' }));


router.get('/facebook/redirect',
    passport.authenticate('facebook', {
        session: false
    }),
    function (req, res) {
        //console.log("Google Callback Returned");
        let newUser = req.user._json;
        if (newUser == null) {
            res.status(404).send();
        } else {
            jwt.sign(newUser, APP_CONFIG.app_secret, {
                expiresIn: authConfigs.tokenExpiryInterval
            }, function (err, token) {
                if (err) throw err;
                else {
                    newUser.authType = 'api.user';
                    res.json({
                        success: true,
                        data: {
                            token: 'Bearer ' + token,
                            user: newUser
                        },
                        message: "User Succesfully logged in"
                    });
                }
            });
        }
    });


router.post('/changePassword', (req, res) => {
    let profile = req.body;
    console.log(profile);
    if (profile && profile != null) {
        let oldPassword = profile.oldPassword;
        let newPassword = profile.newPassword;
        let username = profile.username;
        if (oldPassword && newPassword && oldPassword) {
            let salt = bcrypt.genSaltSync(10);
            let newHash = bcrypt.hashSync(newPassword, salt);
            let Schema;
            try {
                Schema = mongoose.model(authConfigs.authTable);
            } catch (err) {
                Schema = ApplicationsSchemaStructure.getSchemaModel(authConfigs.authTable, {});
            }
            query = {
                identifier: username
            }
            Schema.findOne(query, (err, data) => {
                if (err) throw err;
                else if (data != null) {
                    data = data._doc;
                    let isMatch = bcrypt.compareSync(oldPassword, data.password);
                    if (isMatch) {
                        Schema.update(query, {
                            password: newHash
                        }, (err, data) => {
                            if (err) throw err;
                            else if (data != null) {
                                res.json({
                                    success: true,
                                    message: `Password for ${username} changed Successfully!`
                                });
                            } else {
                                res.json({
                                    success: false,
                                    message: `Some Error in changing password`
                                });
                            }
                        });
                    } else {
                        res.json({
                            success: false,
                            message: `Username or Password does not match`
                        });
                    }
                } else {
                    res.json({
                        success: false,
                        message: `Username or Password does not match`
                    });
                }
            });
        } else {
            res.json({
                success: false,
                message: "Request Body is incomplete!!"
            });
        }
    } else {
        res.json({
            success: false,
            message: "Request Body is empty!!"
        });
    }
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