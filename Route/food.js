const express = require('express');
const router = express.Router();
const food =require('../ApiFiles/food')

router.get('/food',(req,res)=>{
    res.send(food.data)
})

module.exports = router;