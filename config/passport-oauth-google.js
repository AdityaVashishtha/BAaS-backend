var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const mongoose = require('mongoose');

const ApplicationConfig = require('./models/application-config');
const ApplicationsSchemaStructure = require('./models/application-schema-structure');
// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
module.exports = function (passport) {

    ApplicationConfig.getAuthConfig((err, authConfig) => {
        if (err) throw err;
        if (authConfig) {
            let googleOptions = authConfig.googleLoginOption;
            const GOOGLE_CLIENT_ID = googleOptions.clientID.trim();
            const GOOGLE_CLIENT_SECRET = googleOptions.clientSecrete.trim();       
            if(googleOptions.isEnabled) {
                passport.use(new GoogleStrategy({
                    clientID: GOOGLE_CLIENT_ID,
                    clientSecret: GOOGLE_CLIENT_SECRET,
                    callbackURL: "http://localhost:4000/api/auth/google/redirect"
                },
                function (accessToken, refreshToken, profile, done) {
                    console.log("Google Profile Recieved !! ...");
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
                            provider: 'google',
                        };
                        UserSchema.findOne(query, (err, user) => {
                            if (err) {
                                done(err, null);
                            } else if (!googleOptions.isEnabled) {
                                done(null, null);
                            } else if (user != null) {
                                //Send user                                    
                                UserSchema.update(query, {
                                    signedIn: new Date().toString()
                                }, (err, data) => {
                                    if (err) done(err, null);
                                    else if (data.n > 0) {
                                        done(null, profile);
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
                                        done(null, profile);
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
                console.log("Google Login is disabled");
            }
        }
    });
}