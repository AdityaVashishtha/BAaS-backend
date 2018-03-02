const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
//Require Models to use
const logger = require('../../utility/logger');


const router = express.Router();

//Storage service Route
router.post('/',(req,res)=>{
    res.json({
        test: true
    });
})

module.exports = router;