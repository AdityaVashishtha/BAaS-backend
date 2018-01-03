//NodeModule Requires
const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const bodyParser = require('body-parser');
//Custom Requires
const apiRoute = require('./routes/main_api');
const APP_CONFIG = require('./config/application');


//Variable Declaration
const app = express();
const port = APP_CONFIG.port;

//Middleware setup
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());

//Passport Setup
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);



//Application Routing and middleware setup
app.use('/api',apiRoute);

app.post('/authenticate',(req,res)=>{     
    //console.log(req.headers.authorization);      
    let user = Buffer.from(req.headers.authorization.split(' ')[1],'base64').toString().split(':');
    user = {
        username: user[0],
        password: user[1]
    }
    //TODO user check in schema logic
    let check = true;
    if(check) {
        user = {
            username: 'johndoe',
            fullname: 'John Doe',
            email: 'johnode@gmail.com',
        };
        jwt.sign(user, APP_CONFIG.app_secret , { expiresIn: '1h' }, function(err, token) {
            if(err) throw err;
            else {
                res.json({
                    success: true,
                    data: {
                        token: 'Bearer '+token,
                        user: user
                    }
                });
            }            
        });
    } else {
        res.json({
            success: false,
            message: 'Invalid Credentials.'
        });
    }    
});

app.get('/profile',passport.authenticate('jwt', { session: false }),(req,res)=>{
    res.json({
        user: 'Aditya Vashishtha',
        data: {
            postName: 'postName is cool',
            content: 'Cool content'
        }
    });
});

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