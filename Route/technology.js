const express = require('express');
const router = express.Router();
const technology =require('../ApiFiles/technology')

router.get('/technology',(req,res)=>{
    res.send(technology.data)
})

module.exports = router;