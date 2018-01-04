const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const APP_CONFIG = require('./application');
const DashboardUser = require('./models/dashboard-user');

module.exports = function(passport) {
    let opts = {};
    opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();            
    opts.secretOrKey = APP_CONFIG.app_secret;
    passport.use(new JwtStrategy(opts, (jwt_payload,done)=>{        
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
