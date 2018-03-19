const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const rp = require("request-promise")
//Require Models to use
const logger = require('../../utility/logger');
const AuthGuard = require('../../config/passport').isAuthenticated(passport);
const AnalyticsSchemaStructure = require('../../config/models/analytics-schema-structure');
const router = express.Router();
const aasJSON=require("../../config/aasJSON/index");
const config= require("../../config/config.json");

//Analytics Route
router.get('/',(req,res)=>{res.send("OK");})
router.post('/createAnalyticsSchema',(req,res)=>{ 
    let schema = req.body;    
	console.log(schema);
    schema.structure = {};
    if(schema && schema.name && schema.data) {
        let newSchema = new AnalyticsSchemaStructure(schema);
        let query = { name: schema.name };
        AnalyticsSchemaStructure.findOne(query,(err,schema)=>{
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
                            message: "Analytics Schema Created Successfully!!"                
                        });
                    }
                });        
            }
        });
    } else {
        res.json({
            success: false,
            message: "Request body empty!!"        
        });
    }
});
router.get('/getAnalyticsSchemas',(req,res)=>{        
    let query = AnalyticsSchemaStructure.find();
    //query.select('name');
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

router.get('/getAnalyticsSchema/:analyticsName',(req,res)=>{        
    let analyticsName = req.params.analyticsName;
	let query = AnalyticsSchemaStructure.findOne({name:analyticsName});
    //query.select('name');
    query.exec((err,schema)=>{
        if(err) throw err
        else {
            //console.log(schemas)
            res.json({
                success: true,
                schema: schema
            });
        }
    });    
});

router.post('/addAnalyticsStructure',(req,res)=>{
    let analyticsName = req.body.name;
    let query = {name: analyticsName};
    AnalyticsSchemaStructure.findOne(query,(err,data)=>{        
        if(err) throw err
        else if(data !== null){
            let structure={};
            structure=req.body.structure;
            let update = {structure: structure};
            let options = { multi: false };
            AnalyticsSchemaStructure.update(query, update, options, (err,numAffected)=>{
                if(err) throw err;
                else if(numAffected.n == 1) {
                    console.log("Looks like success");
                    res.json({
                        success: true,
                        message: "Structure Added succesfully!!"
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
                message: "Some Error in adding structure found!!"
            });
        }
    });
});

router.get('/getAasJSON',AuthGuard,(req,res)=>{
   res.send(JSON.stringify(aasJSON.steps)); 
});

router.post('/analytics/train/',(req,res)=>{
    console.log(config.pythonServer.url + "/analytics/train/"+req.body.analyticsName)
    rp({
        method : "GET",
        uri : config.pythonServer.url + "/analytics/train/"+req.body.analyticsName,
        json : true
      })
      .then(function(response){
        console.log("====in response=====")
        console.log(JSON.stringify(response))
        
      })
      .catch(function(error){
            console.log("in error:")
           // console.log(error)
      })
    res.send(200,"TASK STARTED");
});

router.post('/analytics/finalTrain',AuthGuard,(req,res)=>{
    console.log(config.pythonServer.url + "/analytics/finalTrain/"+req.user.username+'/'+req.body.analyticsName)
    rp({
        method : "GET",
        uri : config.pythonServer.url + "/analytics/finalTrain/"+req.user.username+'/'+req.body.analyticsName,
        json : true
      })
      .then(function(response){
        console.log("====in response=====")
        console.log(JSON.stringify(response))
        
      })
      .catch(function(error){
            console.log("in error:")
           // console.log(error)
      })
    res.send(200,"TASK STARTED");
});

router.post('/analytics/test',AuthGuard,(req,res)=>{
    console.log(config.pythonServer.url + "/analytics/test/"+req.user.username+'/'+req.body.analyticsName)
    rp({
        method : "POST",
        uri : config.pythonServer.url + "/analytics/test/"+req.user.username+'/'+req.body.analyticsName,
        body:req.body.test,
        json : true
      })
      .then(function(response){
        console.log("====in response=====")
        console.log(JSON.stringify(response))
        
      })
      .catch(function(error){
            console.log("in error:")
           // console.log(error)
      })
    res.send(200,"TASK STARTED");
});
module.exports = router;