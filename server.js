const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// dotenv 
require('dotenv').config();

// create express server 
const app = express();
const port = process.env.PORT || 5000;

// middleware 
app.use(cors());
app.use(express.json()); //allows us to parse json 

// set up moongoose
const uri = process.env.ATLAS_URI; //this is defined in .env
//todo update the uri in .env with Heroku app url once created
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
    );
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})    

// start the server
// run nodemon server to start server  / rs to restart 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}); 