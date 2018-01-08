const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
//Require Models to use
const DashboardUser = require('../config/models/dashboard-user');
const APP_CONFIG = require('../config/application');
const AuthGuard = require('../config/passport').isAuthenticated(passport);

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
    res.json({
        user: 'Aditya Vashishtha',
        cehck: req.isAuthenticated(),
        data: {
            postName: 'postName is cool',
            content: 'Cool content'
        }
    });
});

function isAuthenticated() {
    return passport.authenticate('jwt', { session: false });
}


//Exporting dashboard Route
module.exports = router;