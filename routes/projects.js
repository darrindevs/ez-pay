// set up express router 
const router = require('express').Router();
// require the mongoose model 
let User = require('../models/user');

// '/projects' 
router.route('/').get((req, res) => {
    User.find() // find returns a promise 
        .then(projects => res.json(projects)) // return projects from db 
        .catch(err => res.status(400).json('Error: ' + err)); // if error return error 
    });

// add (post) a new project
router.route('/add').post((req, res) => {
    //todo make creator = logged in user 
    const creator = req.body.creator;
    const description = req.body.description;
    const meta1 = req.body.meta1;
    const meta2 = req.body.meta2;

    // create a new instance of the project 
    const newProject = new Project({
        creator,
        description,
        meta1,
        meta2,
    });
    // save the new Project to the db 
    newProject.save()
    .then(() => res,json('Project added!')) // return user added 
    .catch(err => res.status(400).json('Error: ' + err));
});

// export the router 
module.exports = router;