const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const validator = require('validator');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const ApplicationsSchemaStructure = require('../config/models/application-schema-structure');
const RouteStructure = require('../config/models/route-structure');
const ApplicationConfig = require('../config/models/application-config');

require('../config/passport-oauth-google')(passport);
require('../config/passport-facebook')(passport);

const APP_CONFIG = require('../config/application');
var tableName = 'authUser';
var authConfigs = {
    authTable: 'authUser',
    tableStructure: {

    },
    emailLogin: true,
    verifyEmail: false,
    tokenExpiryInterval: '1h'
}

router.get('/', (req, res) => {
    // let schema;
    // try {
    //     schema = mongoose.model(tableName);
    // } catch (err) {
    //     schema = ApplicationsSchemaStructure.getSchemaModel(tableName, {});
    // }
    // schema.find({}, (err, data) => {
    //     if (err) throw err;
    //     else {
    //         console.log(data);
    //         console.log("Something");
    //     }
    // });    
    let upTime = parseInt(process.uptime() / 3600) + ':' + parseInt(process.uptime() / 60) + ':' + parseInt(process.uptime() % 60);
    res.json({
        success: true,
        message: 'Server is Running',
        uptime: upTime
    });
});

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

router.post('/auth', (req, res) => {
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


router.get('/auth/google', isGoogleAuthEnabled,
    passport.authenticate('google', {
        scope: ['https://www.googleapis.com/auth/plus.login']
    }));

router.get('/auth/google/redirect',
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

router.get('/auth/facebook', isFacebookAuthEnabled,
    passport.authenticate('facebook'));

// app.get('/auth/facebook/callback',
//   passport.authenticate('facebook', { successRedirect: '/',
//                                       failureRedirect: '/login' }));


router.get('/auth/facebook/redirect',
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


router.post('/auth/changePassword', (req, res) => {
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

// Adding Insert Option
router.post('/insert/:schema/:routeName', (req, res) => {
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
            }
            if (isLoggedIn) {
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
                // query = Schema(insertDoc);
                // query.save((err, data) => {
                //     if (err) throw err;                
                //     if(data) {
                //         res.json({
                //             success: true,
                //             count: data.length,
                //             data: data,                        
                //         });
                //     } else {
                //         res.json({
                //             success: false,
                //             message: "Some Error in Insertion",
                //         })
                //     }
                // });
            } else {
                res.status(401).send();
            }
        } else {
            res.status(404).send();
        }
    });
});


router.post('/find/:schema/:routeName', (req, res) => {
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
            if (isLoggedIn) {
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
                    //console.log(item);
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

/* TODO - Change delete method to delete from post */
router.post('/delete/:schema/:routeName', (req, res) => {
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
            if (isLoggedIn) {
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

router.post('/update/:schema/:routeName', (req, res) => {
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
            if (isLoggedIn) {
                let Schema, query;
                try {
                    Schema = mongoose.model(data.schemaName);
                } catch (err) {
                    Schema = ApplicationsSchemaStructure.getSchemaModel(data.schemaName, {});
                }
                let requestBodyFromStructure = data.requestBody;
                let requestBodyActual = Object.keys(req.body);
                let updateDoc = {};
                if (req.body.updateDoc) {
                    updateDoc = req.body.updateDoc;
                }
                updateDoc._updated = new Date().toLocaleDateString();
                query = Schema.update({}, updateDoc, {
                    multi: true
                });
                for (i = 0; i < data.constraints.length; i++) {
                    let item = data.constraints[i];
                    //console.log(item);
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
                            query = query.where(s_attr).gte(req.body[r_attr].toString())
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


router.get("/profile", guardRoute, (req, res) => {
    console.log(req)
    res.json({
        success: true
    });
});

router.get('/test', (req, res) => {
    console.log(req.body);
    res.json(req.rawHeaders);
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