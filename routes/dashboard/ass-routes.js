const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
//Require Models to use
const logger = require('../../utility/logger');
const AuthGuard = require('../../config/passport').isAuthenticated(passport);
const AnalyticsSchemaStructure = require('../../config/models/analytics-schema-structure');
const router = express.Router();


//Analytics Route
router.post('/createAnalyticsSchema',AuthGuard,(req,res)=>{    
    let schema = req.body;    
    schema.structure = {};
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
});
router.get('/getAnalyticsSchemas',AuthGuard,(req,res)=>{        
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

router.get('/getAnalyticsSchema/:analyticsName',AuthGuard,(req,res)=>{        
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

router.post('/addAnalyticsStructure',AuthGuard,(req,res)=>{
    let analyticsName = req.body.name;
    let query = {name: analyticsName};
    AnalyticsSchemaStructure.findOne(query,(err,data)=>{
        //console.log("DDDKD");
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
module.exports = router;