const mongoose = require('mongoose');

const DashboardUserSchema = mongoose.Schema({
    username:{
        type: String,
        unique: true,
        required: true
    },
    password:{
        type: String,        
        required: true
    },
    fullname:{
        type: String,        
        required: true
    },
    createdAt:{
        type: Date,        
        required: true
    },
    access: {
        type: String,
        enum: ['A','B']
    }    
});

const DashboardUser = module.exports = mongoose.model('DashboardUser',DashboardUserSchema);

module.exports.findUserByUsername = function(username,callback) {
    const query = {username};
    DashboardUser.findOne(query,callback);
}