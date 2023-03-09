const express = require('express');
const app = express()
const cors = require('cors')
const path = require('path')
const HomeRouter = require('./Route/home')
const AnimeRouter = require('./Route/anime')
const FoodRouter = require('./Route/food')
const BollywoodRouter = require('./Route/bollywood')
const HollywoodRouter = require('./Route/hollywood')
const TechnologyRouter = require('./Route/technology')
const TravelRouter = require('./Route/travel')

app.use(express.json())
app.use(cors())

app.use('/',HomeRouter)
app.use('/',AnimeRouter)
app.use('/',FoodRouter)
app.use('/',BollywoodRouter)
app.use('/',HollywoodRouter)
app.use('/',TechnologyRouter)
app.use('/',TravelRouter)

app.listen(5000,()=>{
    console.log("App Started on port 5000");
})