const express = require('express');
const router = express.Router();
const path = require('path')

// router.use(express.static(path.join(__dirname,'../')));

router.get('/',(req,res)=>{
    // console.log(__dirname + './public/index.html')
    res.sendFile(path.join(__dirname + '/home.html'))
})

module.exports = router;