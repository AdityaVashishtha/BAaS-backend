const mongoose = require('mongoose');

const ApplicationConfigSchema = mongoose.Schema({    
    name: {
        type: String,
        required: true,
        unique: true,
    },
    config: {
        type: Object,
        required: true,        
    },
    createdAt: {
        type:Date,    
    },
    modifiedAt: {
        type:Date
    }    
});

const ApplicationConfig = module.exports = mongoose.model('ApplicationConfig',ApplicationConfigSchema);

var AUTH_CONFIG = null;

module.exports.getAuthConfig = function(callback) {
    if(AUTH_CONFIG != null) {        
        callback(null,AUTH_CONFIG);
    }        
    else {
        ApplicationConfig.findOne({name: 'auth'},(err,data)=>{
            if(err) throw err;
            else if(data !=null) {                
                AUTH_CONFIG = data.config.signInOptions;
                callback(null,AUTH_CONFIG);
            }
            else {                                
                callback(null,AUTH_CONFIG);
            }                
        });
    }
}

module.exports.updateAuthConfig = function(query,callback) {
    ApplicationConfig.update({name: 'auth'},query,(err,data)=>{
        if(err) throw err;
        else if(data && data.n ==1 ) {            
            AUTH_CONFIG = null;
            callback({
                success: true,
                message: "Configurations Saved Successfully!!"
            });
        } else {
            callback({
                success: false,
                message: "Some error occured in saving configurations!"
            });
        }      
    });
}