const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const ApplicationConfig = require("../../config/models/application-config");
const UploadFile = require("../../config/models/upload-file");

let uploadDirectory = './uploads';

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    ApplicationConfig.getStorageConfig((err, config) => {
      let uploadPath = "./" + config.uploadDirectory;
      uploadDirectory = uploadPath;
      fs.exists(uploadPath, function(exists) {
        if (exists) {
          cb(null, uploadPath);
        } else {
          fs.mkdir(uploadPath, function(err) {
            if (err) {
              console.log(err);
              console.log("Error in folder creation");
              cb(null, "./uploads");
            }
            cb(null, uploadPath);
          });
        }
      });
    });
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  }
});

var upload = multer({
  storage: storage,
  fileFilter: fileFilter
});

ApplicationConfig.getStorageConfig((err, config) => {
  console.log("File Size limit set to ", config.maxFileSizeLimit, " MB");
  upload.limits = {
    fileSize: 1024 * 1024 * config.maxFileSizeLimit
    //files: config.maxNumberOfFilesPerRequest
  };
});

const router = express.Router();

function fileFilter(req, file, cb) {
  //console.log(file);
  ApplicationConfig.getStorageConfig((err, config) => {
    if (config.enableUpload) {
      if (config.allowedMimeTypes.length > 0) {
        if (
          config.allowedMimeTypes.indexOf(file.mimetype) >= 0 &&
          config.exceptedMimeTypes.indexOf(file.mimetype) < 0
        ) {
          cb(null, true);
        } else {          
          cb(null, false);
        }
      } else {
        if (config.exceptedMimeTypes.indexOf(file.mimetype) < 0) {          
          cb(null, true);
        } else {
          cb(null, false);
        }
      }
    } else {      
      cb(null, false);
    }
  });
}

//SubRoutes Variable Import
router.post("/upload", upload.single("file"), (req, res) => {
  if (req.file) {
    let author = "public";
    let accessType = "public";
    if (req.body.author) author = req.body.author;
    if (req.body.accessType) accessType = req.body.accessType;
    let uploadFile = {
      name: req.file.filename,
      author: author,
      accessType: accessType,
      mimeType: req.file.mimetype,
      size: req.file.size,
      createdAt: new Date()
    };
    uploadFile = UploadFile(uploadFile);
    nUploadFile = uploadFile;
    nUploadFile.save(err => {
      if (err) {
        res.json({
          success: false,
          message: "Some error occured"
        });
        console.log(err);
      } else {
        res.json({
          success: true,
          message: "File uploaded Successfully _id here is key to retrive file",
          file:  uploadFile
        });
      }
    });
  } else {
    res.json({
      success: false,
      message: "Some error in file size, type or number"
    });
  }
});

router.get('/file/:fileID',(req,res)=>{
  let fileID = req.params.fileID;
  if(fileID) {
    UploadFile.findById(fileID,(err,data)=>{
      if(err) {
        console.log(err);
        res.status(404).send();
      } else if(data != null) {
        res.sendFile( path.join( __dirname,'../../',uploadDirectory,data.name ) );
      } else {
        res.status(404).send();
      }
    });
  } else {
    res.status(404).send();
  }
});

router.get('/fileDetails/:fileID',(req,res)=>{
  let fileID = req.params.fileID;
  if(fileID) {
    UploadFile.findById(fileID,(err,data)=>{
      if(err) {
        console.log(err);
        res.status(404).send();
      } else if(data != null) {
        res.json({
          success: true,
          message: "File Details retrieved successfully!!",
          file: data
        });
      } else {
        res.status(404).send();
      }
    });
  } else {
    res.status(404).send();
  }
});

router.get('/remove/:fileID',(req,res)=>{
  let fileID = req.params.fileID;
  if(fileID) {
    UploadFile.findByIdAndRemove(fileID,(err,data)=>{
      if(err) {
        console.log(err);
        res.status(404).send();
      } else if (data != null) {
        fs.unlinkSync( path.join( __dirname,'../../',uploadDirectory,data.name ) );
        res.json({
          success: true,
          message: "File delete successfull!!"
        });
      }      
    });
  } else {
    res.status(404).send();
  }
});

module.exports = router;
