//NodeModule Requires
const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//Custom Requires
const apiRoute = require('./routes/main_api');
const dashboardRoute = require('./routes/dashboard');
const APP_CONFIG = require('./config/application');
const User = require('./models/user');


//Variable Declaration
const app = express();
const port = APP_CONFIG.port;

//Database Connection 
const dbUri = 'mongodb://'+APP_CONFIG.database.hostname+':'+
                APP_CONFIG.database.port+'/'+APP_CONFIG.database.name;
mongoose.connect(dbUri);
let db = mongoose.connection;
db.on('error',(err)=>{
    console.log(err);
});
db.once('open',()=>{
    console.log('MongoDB Connected to :: '+dbUri);
});

//Middleware setup
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());

//Passport Setup
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);



//Application Routing and middleware setup
app.use('/api',apiRoute);
app.use('/dashboard',dashboardRoute);


app.get('/',(req,res)=>{
    res.sendStatus(403);
});


//App Listening on port
app.listen(port,(err)=>{
    if(err)
        console.log(err);
    else {
        console.log('Server Started on port: '+port);
    }
});