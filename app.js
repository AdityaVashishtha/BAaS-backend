//NodeModule Requires
const express = require('express');
const path = require('path');

//Custom Requires
const apiRoute = require('./routes/main_api');

//Variable Declaration
const app = express();
const port = 4000;

//Middleware setup
app.use(express.static(path.join(__dirname,'public')));

//Application Routing and middleware setup
app.use('/api',apiRoute);

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