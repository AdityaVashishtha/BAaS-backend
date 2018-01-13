const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path =require('path');
const mongoose = require('mongoose');
//Require Models to use
const DashboardUser = require('../config/models/dashboard-user');
const APP_CONFIG = require('../config/application');
const AuthGuard = require('../config/passport').isAuthenticated(passport);
const ApplicationsSchemaStructure = require('../config/models/application-schema-structure');

router.get('/',(req,res)=>{
    res.send('Dashboard');
});

router.post('/register',(req,res)=>{    
    let user = req.body.user;
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;
    user.createdAt = new Date();    
    let newUser = new DashboardUser(user); 
    DashboardUser.findUserByUsername(user.username,(err,user)=>{
        if(err)
            console.log(err);
        else if(user) {
            res.json({
                success: false,
                msg: 'User already registerd!!',
            });
        } else {
            newUser.save((err)=>{
                if(err) throw err;
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
});


router.post('/authenticate',(req,res)=>{     
    //console.log(req);      
    let rUser = req.body;    
    //TODO user check in schema logic
    DashboardUser.findUserByUsername(rUser.username,(err,user)=>{        
        if(err) 
            console.log(err);
        else if(user) {            
            let isMatch = bcrypt.compareSync(rUser.password,user.password);
            if(rUser.isSuper) {
                console.log('Logging if superuser');
                isMatch = (rUser.password,user.password);
            }            
            if(isMatch) {
                rUser = {
                    username: user.username,
                    fullname: user.fullname
                }
                jwt.sign(rUser, APP_CONFIG.app_secret , { expiresIn: '1h' }, function(err, token) {
                    if(err) throw err;
                    else {
                        res.json({
                            success: true,
                            data: {
                                token: 'Bearer '+token,
                                user: user
                            },
                            message: "User Succesfully logged in"
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

router.get('/profile',AuthGuard,(req,res)=>{
    //console.log(req.rawHeaders);
    res.json({
        user: 'Aditya Vashishtha',
        cehck: req.isAuthenticated(),
        data: {
            postName: 'postName is cool',
            content: 'Cool content'
        }
    });
});

router.post('/createSchema',AuthGuard,(req,res)=>{    
    let schema = req.body;    
    schema.structure = {
        createdAt: {
            type: "Date",
            required: true   
        }        
    };
    let newSchema = new ApplicationsSchemaStructure(schema);
    let query = { name: schema.name };
    ApplicationsSchemaStructure.findOne(query,(err,schema)=>{
        if(err) throw err;
        else if(schema) {
            res.json({
                success: false,
                message: "Schema with same name exist!!"                
            });
        } else {
            newSchema.save((err)=>{
                if (err) throw err;
                else {                                       
                    res.json({
                        success: true,
                        message: "Schema Created Successfully!!"                
                    });
                }
            });        
        }
    });    console.log(schemas);
});

router.get('/getSchemas',AuthGuard,(req,res)=>{        
    let query = ApplicationsSchemaStructure.find();
    query.select('name');
    query.exec((err,schemas)=>{
        if(err) throw err
        else {
            //console.log(schemas)
            res.json({
                success: true,
                schemas: schemas
            });
        }
    });    
});

function isAuthenticated() {
    return passport.authenticate('jwt', { session: false });
}


//Exporting dashboard Route
module.exports = router;