const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
// required for authentication 
const session = require("express-session");

// passport for authentication
const passport = require("passport");
// add passport session 
//const passportsession = require("passport-session");
const passportLocalMongoose = require("passport-local-mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");

// dotenv 
require('dotenv').config();

// create express server 
const app = express();
const port = process.env.PORT || 5000;

// middleware 
app.use(cors());
app.use(express.json()); //allows us to parse json 

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// for passport and authentication
app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false
  }));
  app.use(passport.initialize());
  app.use(passport.session());

// set up moongoose
const uri = process.env.ATLAS_URI; //this is defined in .env
//todo update the uri in .env with Heroku app url once created
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
    );
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// define the routes 
const projectsRouter = require('./routes/projects');
const usersRouter = require('./routes/users');

// import our routes 
//app.use('/projects', projectsRouter);
app.use('/users', usersRouter);

// middleware for passport
app.get("/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
app.get("/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "http://localhost:3000" }),
  function(req, res) {
    // Successful authentication, redirect secrets.
    // this is working - if the user user authenticated then the url will be /a/...
    res.redirect("http://localhost:3000/account");
  }
);

// add logout
// todo update for production url 
// todo make a button / link for this 
app.get("/logout", function(req, res){
    res.redirect("http://localhost:3000/");
  });


//! not working
//todo display user logged in/out , do stuff 
// display stuff using the AuthCheck component
//app.get("/checkAuthentication", (req, res) => {
//const authenticated: boolean = typeof req.user !== 'undefined'

//res.status(200).json({
//authenticated,
//});
//}); 

app.get('*', (req, res) => {
  res.redirect('/#');
});

// start the server
// run nodemon server to start server  / rs to restart 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}); 