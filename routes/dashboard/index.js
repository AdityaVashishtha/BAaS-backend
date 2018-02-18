const express = require('express');
const router = express.Router();
//Require Models to use
const logger = require('../../utility/logger');

//SubRoutes Variable Import
const AuthRoute = require('./auth');
const SchemaRoutes = require('./schema-routes');
const UtilRoutes = require('./util-routes');
const AasRoutes = require('./ass-routes');
const ConfigRoutes = require('./config-routes');
const RouteHandlerRoutes = require('./route-handler-routes');

router.get('/', (req, res) => {
    logger.log("Loggin Info", {
        timestamp: new Date().toString()
    });
    res.send('Dashboard');
});

router.use('/auth', AuthRoute);
router.use('/schema',SchemaRoutes);
router.use('/utils',UtilRoutes);
router.use('/aas',AasRoutes);
router.use('/config',ConfigRoutes);
router.use('/routehandler',RouteHandlerRoutes);

//Exporting dashboard Route
module.exports = router;