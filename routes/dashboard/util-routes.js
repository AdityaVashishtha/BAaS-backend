const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
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

const router = express.Router();


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