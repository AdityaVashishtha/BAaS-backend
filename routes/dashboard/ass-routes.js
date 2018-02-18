const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
//Require Models to use
const logger = require('../../utility/logger');
const AuthGuard = require('../../config/passport').isAuthenticated(passport);

const router = express.Router();

//Aas related routes
router.post('/createModel', AuthGuard, (req, res) => {
    console.log(req.body);
    res.json({
        success: true,
        message: "This is greate"
    });
});

module.exports = router;