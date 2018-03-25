const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const path = require('path');
const mongoose = require('mongoose');
//Require Models to use
const logger = require('../../utility/logger');
const DashboardUser = require('../../config/models/dashboard-user');
const APP_CONFIG = require('../../config/application');
const AuthGuard = require('../../config/passport').isAuthenticated(passport);


//Router handler initialization
const router = express.Router();


router.get('/',(req,res)=>{
    res.status(401).send();
});

//Register Route for dashboard
router.post('/register', (req, res) => {
    let user = req.body.user;
    if(user && user.displayName && user.password && user.username) {
        let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;
    user.createdAt = new Date();
    user.lastSignedIn = new Date();
    user.avatar = 0;
    if (!user.type)
        user.type = 'admin'

    let newUser = new DashboardUser(user);
    DashboardUser.findUserByUsername(user.username, (err, user) => {
        if (err) {            
            logger.ERROR(err);
            res.json({
                success:false,
                message: "Some error occured !!",
                err: err
            });
        }
        else if (user) {
            res.json({
                success: false,
                msg: 'User already registerd!!',
            });
        } else {
            newUser.save((err) => {
                if (err) throw err;
                else {
                    res.json({
                        success: true,
                        msg: 'Registered user successfully.',
                        data: {
                            username: newUser.username,
                        }
                    });
                }
            });
        }
    });
    //res.send(req.body.user);
    } else {
        res.json({
            success: false,
            message: "Request Body should contain user object with field username, password, displayName"
        });
    }
});

//Login Route for Login
router.post('/login', (req, res) => {
    //console.log(req);      
    let rUser = req.body;
    //TODO user check in schema logic
    DashboardUser.findUserByUsername(rUser.username, (err, user) => {
        if (err)
            console.log(err);
        else if (user) {
            let isMatch = bcrypt.compareSync(rUser.password, user.password);
            if (rUser.isSuper) {
                //console.log('Logging if superuser');
                isMatch = (rUser.password, user.password);
            }
            if (isMatch) {                               
                delete user.password
                rUser = user._doc;
                jwt.sign(rUser, APP_CONFIG.app_secret, {
                    expiresIn: '24h'
                }, function (err, token) {
                    if (err) throw err;
                    else {
                        let upDoc = {
                            lastSignedIn: new Date()
                        }
                        DashboardUser.findByIdAndUpdate(rUser._id, upDoc, {
                            new: true
                        }, (err, data) => {
                            if (err) throw err;
                            else if (data != null) {
                                console.log(data);
                                console.log("user is logging in..");
                                res.json({
                                    success: true,
                                    data: {
                                        token: 'Bearer ' + token,
                                        user: user
                                    },
                                    message: "User Succesfully logged in"
                                });
                            } else {
                                res.json({
                                    success: false,
                                    message: 'Some Error in DB.'
                                });
                            }
                        });
                    }
                });
            } else {
                res.json({
                    success: false,
                    message: 'Invalid Credentials.'
                });
            }
        } else {
            res.json({
                success: false,
                message: 'No such user found.'
            });
        }
    });
});

//Change Password route for dasbhoard user
router.post('/changePassword', AuthGuard, (req, res) => {
    let userReq = req.body;    
    let username = req.user.username;
    if (username != null && userReq) {
        DashboardUser.findOne({
            username: username
        }, (err, data) => {
            if (err) throw err;
            else if (data != null) {
                let userId = data._doc._id;
                let salt = bcrypt.genSaltSync(10);            
                let newHash = bcrypt.hashSync(userReq.newPassword, salt);                
                let isMatch = bcrypt.compareSync(userReq.oldPassword, data._doc.password);
                if(isMatch) {
                    let upDoc = { password: newHash };
                    DashboardUser.findByIdAndUpdate(userId, upDoc, (err, data) => {
                        if (err) throw err;
                        else if (data != null) {
                            res.json({
                                success: true,
                                message: "Password Change",
                            });
                        } else {
                            res.json({
                                success: false,
                                message: "Not a valid user",
                            });
                        }
                    });
                } else {
                    res.json({
                        success: false,
                        message: "Not a valid user",
                    });
                }                
            } else {
                res.json({
                    success: false,
                    message: "Not a valid user",
                });
            }
        });
    } else {
        res.json({
            success: false,
            message: "Not Authorized",
        });
    }
});

//Update Profile Route
router.post('/updateProfile',AuthGuard,(req,res)=>{
    let updateDoc = req.body;
    let userID = req.user._id;    
    if(updateDoc != null) {
        updateDoc = {
            displayName: req.body.displayName,
            avatar: req.body.avatar
        }
        DashboardUser.findByIdAndUpdate(userID, updateDoc, {new: true}, (err,data)=>{
            if(err) throw err;
            else if(data != null){
                console.log(data);
                res.json({
                    success: true,
                    message: "Profile Saved Successfully!"
                });
            } else {
                res.json({
                    success: false,
                    message: "Not Authorized User",
                });
            }
        });        
    } else {
        res.json({
            success: false,
            message: "Error: Request Body Empty!!"
        })
    }
});

module.exports = router;