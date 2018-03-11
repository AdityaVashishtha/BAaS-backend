const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');

const APP_CONFIG = require('./application');
const DashboardUser = require('./models/dashboard-user');

module.exports = function(passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();            
    opts.secretOrKey = APP_CONFIG.app_secret;    
    passport.use(new JwtStrategy(opts, (jwt_payload,done)=>{            
        //console.log(jwt_payload);
        //console.log("Authorizing User ...");
        DashboardUser.findUserByUsername(jwt_payload.username,(err,user)=>{
            if(err) 
                done(err,false);
            else if(user) {
                done(null,jwt_payload);     
            } else {
                done(null,false);
            }
        });                
    }));
}

module.exports.isAuthenticated = function(passport) {    
    return passport.authenticate('jwt', { session: false });    
}

module.exports.isLoggedIn = function(token){      
    return jwt.verify(token, APP_CONFIG.app_secret, function (err, decoded) {
        if (err) {            
            return false;
        } else if (decoded.type && decoded.type == 'admin') {             
            return true;
        } 
    });
}