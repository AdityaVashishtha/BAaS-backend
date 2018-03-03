const mongoose = require("mongoose");

const ApplicationConfigSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  config: {
    type: Object,
    required: true
  },
  createdAt: {
    type: Date
  },
  modifiedAt: {
    type: Date
  }
});

const ApplicationConfig = (module.exports = mongoose.model(
  "ApplicationConfig",
  ApplicationConfigSchema
));

var AUTH_CONFIG = null;
var StorageConfig = null;

module.exports.getAuthConfig = function(callback) {
  if (AUTH_CONFIG != null) {
    callback(null, AUTH_CONFIG);
  } else {
    ApplicationConfig.findOne({ name: "auth" }, (err, data) => {
      if (err) throw err;
      else if (data != null) {
        AUTH_CONFIG = data.config.signInOptions;
        callback(null, AUTH_CONFIG);
      } else {
        callback(null, AUTH_CONFIG);
      }
    });
  }
};

module.exports.updateAuthConfig = function(query, callback) {
  ApplicationConfig.update({ name: "auth" }, query, (err, data) => {
    if (err) throw err;
    else if (data && data.n == 1) {
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
};

module.exports.getStorageConfig = function(callback) {
  if (StorageConfig != null) {
    callback(null, StorageConfig);
  } else {      
    ApplicationConfig.findOne({ name: "storage" }, (err, data) => {
      if (err) {
          callback(err,null);
      } else if (data != null) {
        StorageConfig = data.config;
        callback(null, StorageConfig);
      } else {
        //Save application storage config;
        storageConfig = {
          name: "storage",
          config: {
            uploadDirectory: "uploads",
            maxNumberOfFilesPerRequest: 1,
            allowedMimeTypes: ["image/jpeg"],
            exceptedMimeTypes: ["application/json"],
            maxFileSizeLimit: 1,
            enableUpload: true
          },
          createdAt: new Date(),
          modifiedAt: new Date()
        };
        ApplicationConfig(storageConfig).save(err => {
          if (err) {
            console.log(err);
          } else {
            callback(null, storageConfig);
          }
        });
      }
    });
  }
};

module.exports.updateStorageConfig = function(query, callback) {
  ApplicationConfig.update({ name: "storage" }, query, (err, data) => {
    if (err) throw err;
    else if (data && data.n == 1) {
      StorageConfig = null;
      callback({
        success: true,
        message: "Storage Configurations Saved Successfully!!"
      });
    } else {
      callback({
        success: false,
        message: "Some error occured in saving storage configurations!"
      });
    }
  });
};
