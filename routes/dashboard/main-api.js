const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(401).send();
});

module.exports = router;