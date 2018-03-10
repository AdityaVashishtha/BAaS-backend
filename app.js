//NodeModule Requires
const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
//Custom Requires
const apiRoute = require('./routes/generated-api-routes');
const dashboardRoute = require('./routes/dashboard');
const APP_CONFIG = require('./config/application');
const User = require('./models/user');
const logger = require('./utility/logger');
const initializer = require('./utility/initializer');
//Variable Declaration
const app = express();
const port = APP_CONFIG.port;

//Database Connection 
const dbUri = 'mongodb://' + APP_CONFIG.database.hostname + ':' +
    APP_CONFIG.database.port + '/' + APP_CONFIG.database.name;
mongoose.connect(dbUri);
let db = mongoose.connection;
db.on('error', (err) => {
    logger.ERROR(err);
});
db.once('open', () => {
    logger.LOG('MongoDB Connected to :: ' + dbUri);
});

//checking if initialized or not
if (APP_CONFIG.needInitialization)
    initializer();

//Middleware setup
app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

var hitCounter = 0;
var lastTimeStamp = 0;
var lastHitCounts = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
const userHitRecordInterval = 10000;
const userHitRecordSize = 20;
function hitCount(req, res, next) {
    //console.log(req.connection.remoteAddress);
    //TODO insert code for user request logs
    if (lastTimeStamp == 0)
        lastTimeStamp = new Date().valueOf();
    else if ((new Date().valueOf() - lastTimeStamp.valueOf()) >= userHitRecordInterval) {
        if (lastHitCounts.length > userHitRecordSize) {
            lastHitCounts.shift();          
        }
        lastHitCounts.push(hitCounter);
        lastTimeStamp = new Date();
        hitCounter = 0;
    }
    hitCounter++;    
    next();
}
//Passport Setup
//app.use(hitCount);
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.get('/dashboard/hitCount', hitCount, (req, res) => {
    res.json({
        count: lastHitCounts
    });
});

//Application Routing and middleware setup
app.use('/api', hitCount, apiRoute);
app.use('/dashboard', hitCount, dashboardRoute);


app.get('/', (req, res) => {
    res.sendStatus(403);
});

//App Listening on port
app.listen(port, (err) => {
    if (err)
        logger.ERROR(err);
    else {
        logger.LOG("Application Started on port " + port);
    }
});