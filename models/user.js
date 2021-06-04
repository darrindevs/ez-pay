const mongoose = require('mongoose');
// require for passport 
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// create the schema 
const Schema = mongoose.Schema;

const userSchema = new Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    // doesn't work with all routes 
  googleId : {
      type : String,
      required: false
  } , 
  displayName : {
   type : String,
   required: false
} ,
firstName : {
   type : String,
   required: false
} ,
lastName : {
   type : String,
   required: false
},
image : {
   type : String,
   
   required: false
},
about : {
  type : String,
  required: false
},
campdesc : {
  type : String,
  required: false
},
meta1 : {
  type : String,
  required: false
},
createdAt:{
  type: Date,
  default : Date.now
}    
});

// todo slugify the user https://scotch.io/courses/create-a-crud-app-with-node-and-mongodb/a-mongoose-model

// for passport 
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

// create the model 
 const User = mongoose.model('User', userSchema);

// passport
 // Used to stuff a piece of information into a cookie
passport.use(User.createStrategy());
passport.serializeUser(function(user, done) {
  done(null, user.id);
});
// Used to decode the received cookie and persist session
passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

// Middleware to check if the user is authenticated
function isUserAuthenticated(req, res, next) {
  if (req.user) {
      next();
  } else {
      res.send('You must login!');
  }
}


passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:5000/auth/google/callback",
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id, username: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

 module.exports = User;

