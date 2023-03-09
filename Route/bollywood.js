const express = require("express");
const router = express.Router();
const bollywood = require('../ApiFiles/bollywood')

router.get('/bollywood',(req,res)=>{
    // console.log(bollywood)
    res.send(bollywood.data)
})

module.exports = router;