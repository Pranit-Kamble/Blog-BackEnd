const express = require('express');
const router = express.Router();
const hollywood =require('../ApiFiles/hollywood')

router.get('/hollywood',(req,res)=>{
    res.send(hollywood.data)
})

module.exports = router;