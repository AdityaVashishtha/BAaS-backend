const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const validator = require('validator');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const ApplicationsSchemaStructure = require('../config/models/application-schema-structure');
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

router.get('/',(req,res)=>{    
    let schema;
    try {
        schema = mongoose.model(tableName);
    } catch(err) {                
        schema = ApplicationsSchemaStructure.getSchemaModel(tableName,{});
    } 
    schema.find({},(err,data)=>{
        if(err) throw err;
        else {
            console.log(data);
        }
    });
    res.json({
        success: true
    });
});

router.post('/register',(req,res)=>{    
    let user = req.body.user;
    //console.log(user)
    if(user && user.username && user.password) {        
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(user.password, salt);
        let newUser = {};    
        newUser.password = hash;
        newUser.createdAt = new Date().toString();  
        newUser.signedIn = new Date().toString();
        newUser.provider = 'email';
        newUser.identifier =user.username;        
        if(validator.isEmail(newUser.identifier)) {            
            let Schema;
            try {
                Schema = mongoose.model(tableName);
            } catch(err) {                
                Schema = ApplicationsSchemaStructure.getSchemaModel(tableName,{});
            } 
            query = {identifier: newUser.identifier};
            let newUserRow = Schema(newUser);
            Schema.findOne(query,(err,data)=>{
                if(err) throw err;
                else if(data) {
                    //console.log(data);
                    res.json({
                        success: false,
                        message: "Email Id already in use."
                    });
                } else {                    
                    newUserRow.save(err=>{
                        if(err) throw err;
                        else {
                            res.json({
                                success: true,
                                message: "User with email id registered succesfully"
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
                    exceptionMessage: "Provide string was not a valid emal",
                }                    
            });
        }                
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

router.post('/auth',(req,res)=>{
    let user = req.body.user;
    //console.log(user)
    if(user && user.username && user.password) {                                
        let Schema;
        try {
            Schema = mongoose.model(authConfigs.authTable);
        } catch(err) {                
            Schema = ApplicationsSchemaStructure.getSchemaModel(authConfigs.authTable,{});
        } 
        query = { identifier: user.username }
        Schema.findOne(query,(err,data)=>{
            if(err) throw err;
            else if(data) {                                
                let newUser = data._doc;                            
                let isMatch = bcrypt.compareSync(user.password,newUser.password);
                if(isMatch) {
                    newUser.password = null;
                    jwt.sign(newUser, APP_CONFIG.app_secret , { expiresIn: authConfigs.tokenExpiryInterval }, function(err, token) {
                        if(err) throw err;
                        else {
                            res.json({
                                success: true,
                                data: {
                                    token: 'Bearer '+token,
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
                    })    
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

router.get("/profile",guardRoute,(req,res)=>{    
    console.log(req)
    res.json({
        success: true        
    });
});

function guardRoute(req,res,next) {
    token = req.headers.authorization.split(' ')[1];
    //console.log(token)    
    jwt.verify(token, APP_CONFIG.app_secret, function(err, decoded) {        
        if(err) {
            res.status(401).send();
        }
        else if(decoded) {
            next();
        }
    });
}

module.exports = router