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
    displayName:{
        type: String,        
        required: true
    },
    avatar: {
        type: Number,
        default: 0,
        required: true,
    },
    createdAt:{
        type: Date,        
        required: true
    },
    lastSignedIn: {
        type: Date,
        required: true,
    },
    type: {
        type: String        
    }    
});

const DashboardUser = module.exports = mongoose.model('DashboardUser',DashboardUserSchema);

module.exports.findUserByUsername = function(username,callback) {
    const query = {username};
    DashboardUser.findOne(query,callback);
}