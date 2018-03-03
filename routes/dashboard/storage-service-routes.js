const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
//Require Models to use
const logger = require("../../utility/logger");
const ApplicationConfig = require("../../config/models/application-config");

const router = express.Router();

//Storage service Route
router.post("/addStrorageConfig", (req, res) => {  
  let config = req.body;
  if (config != null) {
    let query = {
      config: config,
      modifiedAt: new Date()
    };
    ApplicationConfig.updateStorageConfig(query, jsonRes => {
      res.json(jsonRes);
    });
  }
});

router.get("/getStorageConfig", (req, res) => {
  ApplicationConfig.getStorageConfig((err, config) => {
    if (err) {
      console.log(err);
    } else if (config) {
      res.json({
        success: true,
        message: "Storage Config loaded successfully!!",
        data: config
      });
    }
  });
});

module.exports = router;
