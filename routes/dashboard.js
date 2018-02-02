const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
//Require Models to use
const DashboardUser = require('../config/models/dashboard-user');
const APP_CONFIG = require('../config/application');
const AuthGuard = require('../config/passport').isAuthenticated(passport);
const ApplicationsSchemaStructure = require('../config/models/application-schema-structure');
const apiHitPoint = require('./dashboard/main-api');
const ApplicationConfig = require('../config/models/application-config');
//after routes added
const RouteStructure = require('../config/models/route-structure');

// Declaration of constants 
USER_TABLE_NAME = 'authuser';


router.get('/', (req, res) => {
    res.send('Dashboard');
});

router.use('/api', apiHitPoint);

router.post('/register', (req, res) => {
    let user = req.body.user;
    let salt = bcrypt.genSaltSync(10);
    let hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;
    user.createdAt = new Date();
    let newUser = new DashboardUser(user);
    DashboardUser.findUserByUsername(user.username, (err, user) => {
        if (err)
            console.log(err);
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
});


router.post('/authenticate', (req, res) => {
    //console.log(req);      
    let rUser = req.body;
    //TODO user check in schema logic
    DashboardUser.findUserByUsername(rUser.username, (err, user) => {
        if (err)
            console.log(err);
        else if (user) {
            let isMatch = bcrypt.compareSync(rUser.password, user.password);
            if (rUser.isSuper) {
                console.log('Logging if superuser');
                isMatch = (rUser.password, user.password);
            }
            if (isMatch) {
                rUser = {
                    username: user.username,
                    fullname: user.fullname,
                    type: 'admin'
                }
                jwt.sign(rUser, APP_CONFIG.app_secret, {
                    expiresIn: '24h'
                }, function (err, token) {
                    if (err) throw err;
                    else {
                        res.json({
                            success: true,
                            data: {
                                token: 'Bearer ' + token,
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

router.get('/profile', AuthGuard, (req, res) => {
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

router.post('/createSchema', AuthGuard, (req, res) => {
    let schema = req.body;
    schema.structure = {
        _id: {
            type: "id",
            require: true,
            unique: true
        },
        _insertAt: {
            type: "date",
            require: true,
        },
        _updated: {
            type: "date",
            require: true,
        }
    };
    let newSchema = new ApplicationsSchemaStructure(schema);
    let query = {
        name: schema.name
    };
    ApplicationsSchemaStructure.findOne(query, (err, schema) => {
        if (err) throw err;
        else if (schema) {
            res.json({
                success: false,
                message: "Schema with same name exist!!"
            });
        } else {
            newSchema.save((err) => {
                if (err) throw err;
                else {
                    res.json({
                        success: true,
                        message: "Schema Created Successfully!!"
                    });
                }
            });
        }
    });
});

router.post('/deleteSchema',AuthGuard,(req,res)=>{
    let schema = req.body;
    if(schema.name) {
        if(schema.name == USER_TABLE_NAME) {
            res.json({
                success: false,
                message: "Can not delete user('"+USER_TABLE_NAME+"') table",
            });
        }
        else if(schema.mode && schema.mode == 'archive') {
            res.json({
                success: false,
                message: "Archive Functionality need to be added"
            });
        } else {   
            console.log("Started deleting schema : '"+schema.name+"' ...");
            RouteStructure.remove({ schemaName: schema.name},(err,data)=>{
                if(err) throw err;
                else if(data) {
                    console.log(data);
                    ApplicationsSchemaStructure.remove({name: schema.name},(err,data)=>{
                        if(err) throw err;
                        else if(data) {
                            console.log(data);                            
                            let ModalSchema;
                            try {
                                ModalSchema = mongoose.model(schema.name);
                            } catch (err) {
                                ModalSchema = ApplicationsSchemaStructure.getSchemaModel(schema.name,{});                                
                            }
                            ModalSchema.collection.drop({},(err,data)=>{
                                if(err) throw err;
                                else if(data) {
                                    console.log(data);
                                    res.json({
                                        success: true,
                                        message: "Schema with routes completely removed!!"
                                    })
                                }
                            });
                        }
                    })                    
                }
            });        
            console.log("Finished deleting schema : '"+schema.name+"' ...");   
        }        
    } else {
        res.json({
            success: false,
            message: "Error: Request Body not found",
        });
    }
});

router.get('/getSchemas', AuthGuard, (req, res) => {
    let query = ApplicationsSchemaStructure.find();
    query.select('name');
    query.exec((err, schemas) => {
        if (err) throw err
        else {
            //console.log(schemas)
            res.json({
                success: true,
                schemas: schemas
            });
        }
    });
});

router.get('/table/:tableName', AuthGuard, (req, res) => {
    let tableName = req.params.tableName;
    var query = ApplicationsSchemaStructure.findOne({
        name: tableName
    });
    query.exec((err, data) => {
        if (err) throw err;
        else if (data !== null) {
            let schema;
            try {
                schema = mongoose.model(tableName);
            } catch (err) {
                schema = ApplicationsSchemaStructure.getSchemaModel(tableName, data.structure);
            }
            query = schema.find();
            query.exec((err, rows) => {
                if (err) throw err;
                else {
                    res.json({
                        success: true,
                        data: {
                            structure: data.structure,
                            rows: rows
                        },
                        message: "Fetch Succesfull!!"
                    });
                }
            });
        } else {
            res.json({
                success: false,
                data: null,
                message: "Nothing found!!"
            });
        }
    });
});

router.get('/getSchemaDetail/:tableName', AuthGuard, (req, res) => {
    let tableName = req.params.tableName;
    var query = ApplicationsSchemaStructure.findOne({
        name: tableName
    });
    query.exec((err, data) => {
        if (err) throw err;
        else if (data !== null) {
            res.json({
                success: true,
                data: {
                    structure: data.structure
                },
                message: "Fetch Succesfull!!"
            });
        } else {
            res.json({
                success: false,
                data: null,
                message: "Nothing found!!"
            });
        }
    });
});

router.post('/addAttribute', AuthGuard, (req, res) => {
    let attribute = req.body;
    let query = {
        name: attribute.schema
    };
    console.log(attribute);
    ApplicationsSchemaStructure.findOne(query, (err, data) => {
        //console.log("DDDKD");
        if (err) throw err
        else if (data !== null) {
            //console.log("INTI - ");
            let structure = {};
            if (data.structure)
                structure = data.structure;
            delete attribute.schema;
            structure[attribute.name] = attribute;
            let update = {
                structure: structure
            };
            let options = {
                multi: false
            };
            ApplicationsSchemaStructure.update(query, update, options, (err, numAffected) => {
                if (err) throw err;
                else if (numAffected.n == 1) {
                    console.log("Todo-add create index for unique entries");
                    res.json({
                        success: true,
                        message: "Attribute Added succesfully!!"
                    });
                } else {
                    res.json({
                        success: false,
                        message: "Something not right!!"
                    });
                }
            });
        } else {
            res.json({
                success: false,
                message: "Error in adding attribute : Schema not found!!"
            });
        }
    });
});

router.post('/insertData', AuthGuard, (req, res) => {
    let query = req.body.data;
    let schemaName = req.body.schema;
    //Async call to validator !! under construction
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
            let tempDoc = doc;
            doc.save(err => {
                if (err) throw err;
                else {
                    res.json({
                        success: true,
                        message: "Data Inserted Successfully!!",
                        data: tempDoc,
                    });
                }
            });
        }
    });
    // ApplicationsSchemaStructure.validateBeforeInSchema(query,schemaName,(err,returnBack)=>{
    //     if(err) throw err;
    //     else {
    //         if(returnBack.success) {
    //             let Schema;
    //             try {
    //                 Schema = mongoose.model(schemaName);
    //             } catch(err) {                
    //                 Schema = ApplicationsSchemaStructure.getSchemaModel(schemaName,{any:{}});
    //             }    
    //             delete query._id;
    //             query._insertAt = new Date().toDateString();
    //             query._updated = new Date().toDateString();
    //             let doc = new Schema(query);
    //             doc.save(err=>{
    //                 if(err) throw err;
    //                 else {
    //                     res.json({
    //                         success: true,
    //                         message: "Data Inserted Successfully!!"
    //                     });
    //                 }
    //             })
    //         } else {
    //             res.json(returnBack);
    //         }
    //     }
    // });         
});

router.post('/deleteData',AuthGuard,(req,res)=>{
    if(req.body) {
        let query = req.body.data;
        let schemaName = req.body.schema;
        if(query && schemaName) {
            let ModalSchema;
            try {
                ModalSchema = mongoose.model(schemaName);
            } catch (err) {
                ModalSchema = ApplicationsSchemaStructure.getSchemaModel(schemaName,{});
            }
            ModalSchema.remove(query,(err,data)=>{
                if(err) throw err;
                else if(data!=null && data.n > 0 ) {
                    res.json({
                        success: true,
                        message: "Data Deleted Successfully",
                        //data: data
                    });
                } else {
                    res.json({
                        success: false,
                        message: "DataBase Error: Error in deleting document!"
                    })
                }
            });

        } else {
            res.json({
                success: false,
                message: "Error: Request body is deformed!"
            });
        }
    } else {
        res.json({
            success: false,
            message: "Error: Request body is empty!"
        });
    }    
});

router.post('/addRoute',AuthGuard, (req, res) => {
    let routeModel = req.body;
    let routeData = {
        name: routeModel.name,
        schemaName: routeModel.schemaName,
        operationType: routeModel.operationType,
        requestBody: routeModel.requestBody,
        constraints: routeModel.constraint,
        accessControl: routeModel.accessControl,
        createdAt: new Date(),
    }
    let route = new RouteStructure(routeData);
    //console.log(route);
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

router.post('/deleteRoute',AuthGuard,(req,res)=>{
    if(req.body) {
        let query = {
            name: req.body.name,
            schemaName: req.body.schemaName
        };
        RouteStructure.remove(query,(err,data)=>{
            if(err) throw err;
            else if(data != null && data.n >0) {
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

router.post('/getRoutes',AuthGuard, (req, res) => {
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

router.get('/getAuthenticationConfig',(req,res)=>{
    ApplicationConfig.findOne({name: 'auth'},(err,config)=>{
        if(err) throw err;
        else if(config != null) {
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

router.post('/setAuthenticationConfig',(req,res)=>{    
    let config = req.body;    
    if(config != null) {
        let query = {            
            config: config,
            modifiedAt: new Date(),
        }
        ApplicationConfig.updateAuthConfig(query,(jsonRes)=>{
            res.json(jsonRes);
        });
    }
});

router.get('/getApplicationDetails',AuthGuard,(req,res)=>{
    res.json({
        success: true,
        message: "Application Details Fetched",
        config: APP_CONFIG
    });
});

function isAuthenticated() {
    return passport.authenticate('jwt', {
        session: false
    });
}


//Exporting dashboard Route
module.exports = router;