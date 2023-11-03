const express = require('express');

const mongoose = require('mongoose')

const videoRouter = require('./videoRouter')

const app = express();

app.use(express.json());

const DBURL = "mongodb://localhost:27017/youtubeClone"

mongoose.connect(DBURL)
.then(() => {console.log("Database connected",DBURL)})
.catch(() => {console.log("Cannot connect DB",error)})

app.get('/',function(req,res){
    return res.send("Hello server!")
})

app.use(videoRouter)

app.listen(5500, function(){
    console.log("App Server is running on port 5500")
})

