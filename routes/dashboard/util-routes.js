const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const multer = require('multer');

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
const TEMP_UPLOAD_DIRECTORY = './temp';


//MULTER INITIALIZATION FOR FILE UPLOAD
var storage = multer.diskStorage({
    // destination
    destination: function (req, file, cb) {
        console.log("TEMP_UPLOAD_DIRECTORY")
        cb(null, TEMP_UPLOAD_DIRECTORY)
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() +'_'+file.originalname);
    }
});
  
var upload = multer({
    storage: storage,
    fileFilter: fileFilter
});

const router = express.Router();

function fileFilter(req, file, cb) {
    console.log(file);
    if(file.mimetype == 'text/csv') {
        cb(null,true);
    } else {
        cb(null,false);
    }
}



//Utilities
router.get('/getApplicationDetails', AuthGuard, (req, res) => {
    res.json({
        success: true,
        message: "Application Details Fetched",
        config: APP_CONFIG
    });
});

router.post('/exportToCSV', AuthGuard, (req, res) => {
    const Json2csvParser = require('json2csv').Parser;
    let reqbody = req.body;
    //console.log(reqbody.data.collectionName);
    //console.log(reqbody.data.collectionAttributes);
    let tableName = reqbody.data.collectionName;
    const fields = reqbody.data.collectionAttributes;
    const opts = {
        fields
    };
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
                    console.log(opts);
                    const parser = new Json2csvParser(opts);
                    let tempRows = rows.map(item => {
                        item = JSON.stringify(item);
                        item = JSON.parse(item);
                        delete item._id;
                        console.log(item);
                        return item;
                    });
                    rows = tempRows;
                    console.log(JSON.stringify(rows));
                    const csv = parser.parse(rows);
                    //console.log(csv)
                    let uploadPath = "temp";
                    let crypto = require('crypto');
                    let hash = crypto.createHash('sha256').update((new Date().valueOf()).toString()).digest('base64');
                    let fileName = tableName+ '_' + hash + '.csv';
                    //const fs = require('fs');
                    fs.exists(uploadPath, function (exists) {
                        if (exists) {
                            // TODO add here file
                            console.log("Adding temp file here");
                            fs.writeFile(uploadPath+'/'+fileName, csv, 'utf8', function (err) {
                                if (err) {
                                    console.log('Some error occured - file either not saved or corrupted file saved.');
                                    res.status(500).send();
                                } else {
                                    res.json({
                                        success: true,
                                        message: "Converted",
                                        data: {
                                            url: "http://"+APP_CONFIG.hostname+":"+APP_CONFIG.port+"/dashboard/utils/tempFile/" + fileName
                                        }
                                    });
                                }
                            });
                        } else {
                            fs.mkdir(uploadPath, function (err) {
                                if (err) {
                                    console.log(err);
                                    console.log("Error in folder creation");
                                    res.status(500).send();
                                } else {
                                    console.log("Adding temp file here");
                                    fs.writeFile(uploadPath+'/'+fileName, csv, 'utf8', function (err) {
                                        if (err) {
                                            console.log('Some error occured - file either not saved or corrupted file saved.');
                                            res.status(500).send();
                                        } else {
                                            res.json({
                                                success: true,
                                                message: "COnverted",
                                                data: {
                                                    url: "http://localhost:4000/api/export/tempFile/" + fileName
                                                }
                                            });
                                        }
                                    });
                                }
                            });
                        }
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

//TODO add import to csv code to import schema
router.post('/importFromCSV/:schemaName',upload.single("uploadCSV"),(req,res)=>{
    let schemaName = req.params.schemaName;
    if(req.file && schemaName) {
        let file = req.file;
        var Converter = require("csvtojson").Converter;
        var converter = new Converter({});
        converter.fromFile(file.path,function(err,result){
            if(err){
                console.log("An Error Has Occured");
                console.log(err);
                res.json({
                    success: false,
                    message: "Some error has occured",
                    error: err
                });
            } else {
                if(result.length > 0) {
                    fs.unlinkSync(file.path);
                    let keys = Object.keys(result[0]);
                    let structure = {
                        _id: {
                            "name" : "_id",
                            "type" : "id",
                            "isRequired" : true,
                            "isUnique" : true,
                            "default" : "",
                            "encryptInHash" : false,
                            "regexPattern" : "",
                            "enumValues" : [ ]
                        },
                        _insertAt: {
                            "name" : "_insertAt",
                            "type" : "date",
                            "isRequired" : true,
                            "isUnique" : false,
                            "default" : "",
                            "encryptInHash" : false,
                            "regexPattern" : "",
                            "enumValues" : [ ]
                        },
                        _updated: {
                            "name" : "_updated",
                            "type" : "date",
                            "isRequired" : true,
                            "isUnique" : false,
                            "default" : "",
                            "encryptInHash" : false,
                            "regexPattern" : "",
                            "enumValues" : [ ]
                        }
                    };
                    for(i=0;i<keys.length;i++) {
                        let attrName = keys[i];
                        structure[attrName] = {
                            "name" : attrName,
                            "type" : "string",
                            "isRequired" : false,
                            "isUnique" : false,
                            "default" : "",
                            "encryptInHash" : false,
                            "regexPattern" : "",
                            "enumValues" : [ ]
                        }
                    }
                    let schema = {
                        name: schemaName,
                        structure: structure
                    }
                    console.log(result)
                    result = result.map(item=> {
                        item._insertAt = new Date().toString();
                        item._updated = new Date().toString();
                        return item;
                    });
                    let schemaStructure = new ApplicationsSchemaStructure(schema);
                    schemaStructure.save(err=>{
                        if(err) {
                            console.log(err);
                            res.json({
                                success: false,
                                message: 'Some error in insertion of structure',
                                error: err
                            });
                        } else {
                            let SchemaModel;
                            try {
                                SchemaModel = mongoose.model(schemaName);
                            } catch (err) {
                                SchemaModel = ApplicationsSchemaStructure.getSchemaModel(schemaName, {
                                    any: {}
                                });
                            }
                            // let docs = new SchemaModel(result);
                            console.log(result)
                            SchemaModel.collection.insertMany(result,(err,docs)=> {
                                if(err) {
                                    console.log(err);
                                    res.json({
                                        success: false,
                                        message: 'Some error in insertion of data',
                                        error: err
                                    });
                                } else {
                                    res.json({
                                        success: true,
                                        message: "CSV file imported successfully!!"
                                    });
                                }
                            });                           
                        }
                    });
                } else {
                    res.json({
                        success: false,
                        message: "Error parsing csv no data present!!"
                    });
                }
            }            
        });
        //res.json({test: true});
    } else {
        res.json({
            success:false,
            message: 'Invalid file type'
        });
    }
});

router.get('/tempFile/:fileId', (req, res) => {
    let fileId = req.params.fileId;
    if (fileId) {
        console.log(fileId)
        res.sendFile(path.join(__dirname, '../../temp', fileId));
        //fs.unlinkSync(path.join(__dirname, '../../temp', fileId));
    } else {
        res.status(404).send();
    }
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