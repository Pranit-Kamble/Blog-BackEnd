const express = require('express');
const router = express.Router();
const anime =require('../ApiFiles/anime')

router.get('/anime',(req,res)=>{
    res.send(anime.data)
})

module.exports = router;