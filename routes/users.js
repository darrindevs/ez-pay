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

    // '/users/:id'
    // get a user by id 
router.route('/user/:id').get((req, res) => {
    User.find() // find returns a promise 
        .then(users => res.json(users)) // return users from db 
        .catch(err => res.status(400).json('Error: ' + err)); // if error return error 
    });

// add (post) a new user 
router.route('/add').post((req, res) => {
    //todo update this to a user id?
    // define all the values that to update and then pass as params
    const name = req.body.name;
    const about = req.body.about;
    const campdesc = req.body.campdesc;
    const meta1 = req.body.meta1;
    const meta2 = req.body.meta2;
    const meta3 = req.body.meta3;

    // create a new instance of the user
    const newUser = new User({name, about, campdesc, meta1, meta2, meta3});
    // save the new user to the db 
    newUser.save()
    .then(() => res.json('User added!')) // return user added 
    .catch(err => res.status(400).json('Error: ' + err));
});

// export the router 
module.exports = router;