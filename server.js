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

//app.use(express.static('public'));

// for passport and authentication
app.use
  (session({
    secret: process.env.SESSION_SECRET,
    resave: false, 
    saveUninitialized: true, // true sets cookie in browser beforee we have info for session - true for dev, false for prod
    //todo switch savedUninitialized to false for production 
    cookie: {
      httpOnly: true,
      maxAge: 7200000 // 2 hours 
    }
  }));
  // session is now on the server and confirmed that cookie is visible in the browser 

//session middleware 
// console log session info - seeing this only on fresh authentication 
app.use((req, res, next) => {
  console.log(req.session);
  next(); // pass controls to the next function 
});

// track logged in user using session
// https://www.youtube.com/watch?v=3B2EiRaRy7g 
const requireAuth = (req, res, next) => {
  const { user } = req.session;
  if (!user) {
    return res.status(401).json({ message: 'Unauthorized'});
  }
  next();  
};

// this middleware is in case we want to restrict access to admins only
// admin will need to be defined in the user model / user level
//const requireAdmin = (req, res, next) => {
  //const { user } = req.session; 
  //if (user.role !== 'admin') {
    //return res 
      //.status(401)
      //.json({ messsage: 'Insufficient role'});
     //}
     //next();
//};

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
  passport.authenticate("google", { failureRedirect: "http://localhost:3000" || "/" }),
  function(req, res) {
    // Successful authentication, redirect secrets.
    // this is working - if the user user authenticated then the url will be /a/...
    // local host required for google in development
    res.redirect("http://localhost:3000/account" || "/account");
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

//app.get('*', (req, res) => {
  //res.redirect('/');
//});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// start the server
// run nodemon server to start server  / rs to restart 
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
}); 