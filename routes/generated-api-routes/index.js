const express = require('express');
const router = express.Router();
const logger = require('../../utility/logger');

//SubRoutes Variable Import
const findRoute = require('./find-route');
const insertRoute = require('./insert-route');
const updateRoute = require('./update-route');
const deleteRoute = require('./delete-route');
const authRoute = require('./auth-route');
const storageRoute = require('./storage-route');

router.get('/', (req, res) => {
    let upTime = parseInt(process.uptime() / 3600) + ':' + parseInt(process.uptime() / 60) + ':' + parseInt(process.uptime() % 60);
    res.json({
        success: true,
        message: 'Server is Running',
        uptime: upTime
    });
});

router.use('/find', findRoute);
router.use('/update', updateRoute);
router.use('/insert', insertRoute);
router.use('/delete', deleteRoute);
router.use('/auth', authRoute);
router.use('/storage', storageRoute);
//TODO other routes here

module.exports = router;