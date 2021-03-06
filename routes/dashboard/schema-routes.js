const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
//Require Models to use
const logger = require('../../utility/logger');
const AuthGuard = require('../../config/passport').isAuthenticated(passport);
const ApplicationsSchemaStructure = require('../../config/models/application-schema-structure');
//after routes added
const RouteStructure = require('../../config/models/route-structure');
// Declaration of constants 
USER_TABLE_NAME = 'authuser';

//Router variable initialization
const router = express.Router();


//Schema Related Routes -----
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

router.post('/deleteSchema', AuthGuard, (req, res) => {
    let schema = req.body;
    if (schema.name) {
        console.log('deleteStart');
        if (schema.name == USER_TABLE_NAME) {
            res.json({
                success: false,
                message: "Can not delete user('" + USER_TABLE_NAME + "') table",
            });
        } else if (schema.mode && schema.mode == 'archive') {
            res.json({
                success: false,
                message: "Archive Functionality need to be added"
            });
        } else {
            console.log("Started deleting schema : '" + schema.name + "' ...");
            RouteStructure.remove({
                schemaName: schema.name
            }, (err, data) => {
                if (err) throw err;
                else if (data) {
                    console.log(data);
                    ApplicationsSchemaStructure.remove({
                        name: schema.name
                    }, (err, data) => {
                        if (err) throw err;
                        else if (data) {
                            console.log(data);
                            let ModalSchema;
                            try {
                                ModalSchema = mongoose.model(schema.name);
                            } catch (err) {
                                ModalSchema = ApplicationsSchemaStructure.getSchemaModel(schema.name, {});
                            }
                            console.log("Finished deleting schema : '" + schema.name + "' ...");
                            ModalSchema.collection.drop({}, (err, data) => {
                                if (err) {
                                    if (err.code == 26) {
                                        res.json({
                                            success: true,
                                            message: "Schema deleted But No data present!!"
                                        });
                                    } else {
                                        throw err;
                                    }
                                } else if (data) {
                                    console.log(data);
                                    res.json({
                                        success: true,
                                        message: "Schema with routes completely removed!!"
                                    });
                                }
                            });

                        }
                    })
                }
            });
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
                    //password removal from table
                    if (tableName == 'authuser') {
                        delete data.structure.password;
                        delete rows.password;
                    }
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
    if (!(attribute.name == 'id' || attribute.name == '_id')) {
        ApplicationsSchemaStructure.findOne(query, (err, data) => {
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
    } else {
        res.json({
            success: false,
            message: "Attribute name can't be id or _id"
        });
    }
});

router.post('/removeAttribute', AuthGuard, (req, res) => {
    let attribute = req.body.attribute;
    let schemaName = req.body.schemaName;
    if (attribute && schemaName) {
        let attributeName = attribute.name;
        let query = {
            name: schemaName
        };
        console.log(req.body);
        ApplicationsSchemaStructure.findOne(query, (err, data) => {
            if (err) throw err;
            else {
                let structure = data.structure;
                if (structure[attributeName])
                    delete structure[attributeName]
                console.log(structure);
                ApplicationsSchemaStructure.update({
                    name: schemaName
                }, {
                    structure: structure
                }, {
                    new: true
                }, (err, data) => {
                    if (err) throw err;
                    else if (data && data != null) {
                        console.log(data);
                        query = {
                            $and: [{
                                schemaName: schemaName
                            }, {
                                constraints: {
                                    $elemMatch: {
                                        "schemaAttribute": attributeName
                                    }
                                }
                            }]
                        }
                        RouteStructure.remove(query, (err, data) => {
                            if (err) throw err;
                            else if (data != null) {
                                console.log(data);
                                let ModalSchema;
                                query = {
                                    "$unset": {
                                        
                                    }
                                };
                                query["$unset"][attributeName]=true;
                                try {
                                    ModalSchema = mongoose.model(schemaName);
                                } catch (err) {
                                    ModalSchema = ApplicationsSchemaStructure.getSchemaModel(schemaName, {});;
                                }                                
                                ModalSchema.update({},query,{
                                    upsert: false,
                                    multi: true,
                                    new: true
                                }, (err, data) => {
                                    if (err) throw err;
                                    else if (data != null) {
                                        console.log(data);
                                        res.json({
                                            success: true,
                                            message: 'Attribute Delete succesfull!'
                                        });
                                    } else {
                                        res.json({
                                            success: false,
                                            message: 'Attribute deletion in table failed after 3/4 completion!!'
                                        });
                                    }
                                });
                            } else {
                                res.json({
                                    success: false,
                                    message: 'Attribute deletion half reach route deletion problem!!'
                                });
                            }
                        });
                    } else {
                        res.json({
                            success: false,
                            message: 'Attribute Deletion Unsuccessfull !!'
                        });
                    }
                });
            }
        });
    } else {
        res.json({
            success: false,
            message: 'RequestBodyError: Request body empty!!'
        });
    }
});


router.post('/editSchemaStructure', AuthGuard, (req, res) => {
    if (req.body) {
        let schemaName = req.body.schemaName;
        let schemaStructure = req.body.structure;
        if (schemaName && schemaStructure) {
            ApplicationsSchemaStructure.findOne({
                name: schemaName
            }, (err, data) => {
                if (err) throw err;
                else if (data && data != null) {
                    let newStructure = data._doc.structure;
                    //console.log(newStructure);
                    for (i = 0; i < schemaStructure.length; i++) {
                        if (schemaStructure[i].name)
                            newStructure[schemaStructure[i].name] = schemaStructure[i];
                    }
                    ApplicationsSchemaStructure.update({
                        name: schemaName
                    }, {
                        structure: newStructure
                    }, (err, data) => {
                        if (err) throw err;
                        else if (data && data != null) {
                            //console.log(data);
                            res.json({
                                success: true,
                                message: 'Updated schema structure successfully!'
                            });
                        } else {
                            res.json({
                                success: false,
                                message: 'Database error please try again later!'
                            });
                        }
                    });
                } else {
                    res.json({
                        success: false,
                        message: 'Database error please try again later!'
                    });
                }
            });
        } else {
            res.json({
                success: false,
                message: 'ErrorInRequestBody: Wrong request body'
            });
        }
    } else {
        res.json({
            success: false,
            message: 'ErrorInRequestBody: Eempty request body'
        });
    }
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
            query._insertAt = new Date().toString();
            query._updated = new Date().toString();
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
});

router.post('/deleteData', AuthGuard, (req, res) => {
    if (req.body) {
        let query = req.body.data;
        let schemaName = req.body.schema;
        if (query && schemaName) {
            let ModalSchema;
            try {
                ModalSchema = mongoose.model(schemaName);
            } catch (err) {
                ModalSchema = ApplicationsSchemaStructure.getSchemaModel(schemaName, {});
            }
            ModalSchema.remove({
                _id: query._id
            }, (err, data) => {
                if (err) throw err;
                else if (data != null && data.n > 0) {
                    res.json({
                        success: true,
                        message: "Data Deleted Successfully",
                        //data: data
                    });
                } else {
                    console.log(data);
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



//exporting router variable for usage
module.exports = router;