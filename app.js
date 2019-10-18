const express = require('express');

const app = express();
const mongoose = require('mongoose');
require('dotenv/config');
const bodyParser = require('body-parser');
const cors = require('cors');


//Imports Route using middle ware to use for multiple 


//this is a route to the post.js
const postRouter =  require('./routes/posts');

//middleware 
app.use(cors());
app.use(bodyParser.json());
app.use('/posts', postRouter);

//Routes
app.get('/',(req,res) => {
    res.send('We are on home');
})

//Connect to db
    mongoose.connect(process.env.DB_CONNECTION,{useNewUrlParser: true , useUnifiedTopology: true } ,() =>{
            console.log('connected to DB');
            
    })      
//How do we start listing 
app.listen(3000);

