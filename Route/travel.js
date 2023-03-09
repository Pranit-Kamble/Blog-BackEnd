const express = require('express');
const router = express.Router();
const travel =require('../ApiFiles/travel')

router.get('/travel',(req,res)=>{
    res.send(travel.data)
})

module.exports = router;