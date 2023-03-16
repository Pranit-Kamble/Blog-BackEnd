const express = require('express');
const router = express.Router();
const home = require('../ApiFiles/home')

router.get('/',(req,res)=>{
    res.send(home.data)
})

module.exports = router;