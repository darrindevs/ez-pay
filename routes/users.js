// set up express router 
const router = require('express').Router();
// require the mongoose model 
let User = require('../models/user');

// '/users' 
router.route('/').get((req, res) => {
    User.find() // find returns a promise 
        .then(users => res.json(users)) // return users from db 
        .catch(err => res.status(400).json('Error: ' + err)); // if error return error 
    });

// add (post) a new user 
router.route('/add').post((req, res) => {
    //todo update this to a user id?
    const username = req.body.username;
    // create a new instance of the user
    const newUser = new User({username});
    // save the new user to the db 
    newUser.save()
    .then(() => res,json('User added!')) // return user added 
    .catch(err => res.status(400).json('Error: ' + err));
});

// export the router 
module.exports = router;