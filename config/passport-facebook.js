var passport = require('passport');
var FacebookStrategy = require('passport-facebook');
const mongoose = require('mongoose');

const ApplicationConfig = require('./models/application-config');
const ApplicationsSchemaStructure = require('./models/application-schema-structure');
module.exports = function (passport) {

    ApplicationConfig.getAuthConfig((err, authConfig) => {
        if (err) throw err;
        if (authConfig) {
            let facebookOptions = authConfig.facebookLoginOption;
            const FACEBOOK_APP_ID = facebookOptions.clientID;
            const FACEBOOK_APP_SECRET = facebookOptions.clientSecrete;
            //console.log(facebookOptions);
            if (facebookOptions.isEnabled) {
                console.log("Facebook Login Enabled");
                passport.use(new FacebookStrategy({
                        clientID: FACEBOOK_APP_ID,
                        clientSecret: FACEBOOK_APP_SECRET,
                        callbackURL: "http://localhost:4000/api/auth/facebook/redirect"
                    },
                    function (accessToken, refreshToken, profile, done) {
                        console.log("Facebook Profile Recieved !! ...");
                        if (profile) {
                            //console.log(profile);
                            let UserSchema;
                            let tableName = 'authuser';
                            try {
                                UserSchema = mongoose.model(tableName);
                            } catch (err) {
                                UserSchema = ApplicationsSchemaStructure.getSchemaModel(tableName, {});
                            }
                            query = {
                                identifier: profile.id,
                                provider: 'facebook',
                            };
                            UserSchema.findOne(query, (err, user) => {
                                if (err) {
                                    done(err, null);
                                } else if (!facebookOptions.isEnabled) {
                                    done(null, null);
                                } else if (user != null) {
                                    //Send user                                    
                                    UserSchema.update(query, {
                                        signedIn: new Date().toString()
                                    }, (err, data) => {
                                        if (err) done(err, null);
                                        else if (data.n > 0) {
                                            user = user._doc;
                                            user.profile = profile;
                                            done(null, user);
                                        } else {
                                            done(null, null);
                                        }
                                    });
                                } else {
                                    query.createdAt = new Date().toString();
                                    query.signedIn = new Date().toString();
                                    query.password = 'NA';
                                    let googleUser = new UserSchema(query);
                                    let tempUser = googleUser;
                                    googleUser.save((err) => {
                                        if (err) {
                                            done(err, null);
                                        } else {
                                            let user = tempUser._doc;
                                            user.profile = profile;
                                            done(null, user);
                                        }
                                    });
                                }
                            });
                            //done(null,profile);
                        } else {
                            done(null, null);
                        }
                    }
                ));
            } else {
                console.log("Facebook Login is disabled");
            }
        }
    });
}