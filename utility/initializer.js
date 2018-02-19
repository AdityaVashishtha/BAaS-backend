const DashboardUser = require('../config/models/dashboard-user');
const APP_CONFIG = require('../config/application');
const ApplicationsSchemaStructure = require('../config/models/application-schema-structure');
const ApplicationConfig = require('../config/models/application-config');

module.exports = function initialize() {
    console.log("Initializing application for first usage..");
    console.log("Initializing user ...");
    let user = {};
    user.username = APP_CONFIG.author;
    user.displayName = APP_CONFIG.author;
    user.password = APP_CONFIG.hash;
    user.createdAt = new Date();
    user.lastSignedIn = new Date();
    user.avatar = 0;
    user.type = 'admin'
    let dUser = DashboardUser(user);
    dUser.save((err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("User created");
            let config = {
                "name": "auth",
                "createdAt": new Date(),
                "modifiedAt": new Date(),
                "config": {
                    "signInOptions": {
                        "primaryLogin": "email",
                        "allowLoginAsGuest": false,
                        "verifyWithEmail": false,
                        "googleLoginOption": {
                            "isEnabled": false,
                            "clientID": "",
                            "clientSecrete": ""
                        },
                        "facebookLoginOption": {
                            "isEnabled": false,
                            "key": ""
                        }
                    }
                }
            };
            let newConfig = ApplicationConfig(config);
            newConfig.save((err) => {
                if (err) {
                    console.log(err);
                } else {                    
                    let structureAuthUser = ApplicationsSchemaStructure({
                        "name": "authuser",                        
                        "structure": {
                            "identifier": {
                                "name": "identifier",
                                "type": "string",
                                "isRequired": true,
                                "isUnique": true,
                                "default": "",
                                "encryptInHash": false
                            },
                            "password": {
                                "name": "password",
                                "type": "string",
                                "isRequired": true,
                                "isUnique": false,
                                "default": "",
                                "encryptInHash": true
                            },
                            "provider": {
                                "name": "provider",
                                "type": "string",
                                "isRequired": true,
                                "isUnique": false,
                                "default": "",
                                "encryptInHash": false
                            },
                            "createdAt": {
                                "name": "createdAt",
                                "type": "string",
                                "isRequired": true,
                                "isUnique": false,
                                "default": "",
                                "encryptInHash": false
                            },
                            "signedIn": {
                                "name": "signedIn",
                                "type": "string",
                                "isRequired": true,
                                "isUnique": false,
                                "default": "",
                                "encryptInHash": false
                            }
                        }
                    });    
                    structureAuthUser.save((err)=>{
                        if(err) {
                            console.log(err);
                        } else {
                            console.log("Authentication table created!");                                                        
                            console.log("Config file rewriting ... Restart server to apply changes");
                            delete APP_CONFIG.needInitialization;
                            delete APP_CONFIG.hash; 
                            console.log(APP_CONFIG);
                            var fileSystem = require('fs');
                            fileSystem.writeFile('./config/config.json', JSON.stringify(APP_CONFIG, 2, null), function (err) {
                                if (err) {
                                    return console.log(err);
                                } else {
                                    console.log("Initialization process completed!!");
                                    console.log("your credentials are same as last time");
                                }									
                            });                            
                        }
                    });
                }
            });
        }
    });
}