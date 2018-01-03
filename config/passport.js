const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const APP_CONFIG = require('./application');

module.exports = function(passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();            
    opts.secretOrKey = APP_CONFIG.app_secret;
    passport.use(new JwtStrategy(opts, (jwt_payload,done)=>{
        console.log(jwt_payload);    
        done(null,jwt_payload);
        //todo schema search for user;
    }));
}
