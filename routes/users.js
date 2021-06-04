// set up express router 
const router = require('express').Router();
// require the mongoose model 
let User = require('../models/user');

// '/users' 
router.get("/", (req, res, next) => {
    User.find()
      .exec()
      .then(docs => {
        console.log(docs);
        if (docs.length >= 0) {
        res.status(200).json(docs);
        } else {
        res.status(404).json({
        message: 'No entries found'
        });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });



// get a user by id 
// this is working 
// like this /users/38293829102932
router.get("/:userId", (req, res, next) => {
    const id = req.params.userId;
    User.findById(id)
      .exec()
      .then(doc => {
        console.log("From database", doc);
        if (doc) {
          res.status(200).json(doc);
        } else {
          res
            .status(404)
            .json({ message: "No valid entry found for provided ID" });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: err });
      });
  });

// add a new user 
// this is working with all fielbs in object
// like this /add 
router.route('/add').post((req, res) => {
    // save the new user to the db 
    const newUser = new User(); 
    newUser.displayName = req.body.displayName;
    newUser.firstName = req.body.firstName;
    newUser.lastName = req.body.lastName;
    newUser.about = req.body.about;
    newUser.campdesc = req.body.campdesc;
    newUser.meta1 = req.body.meta1;
    
    newUser.save()
    .then(() => res.json('User added!')) // return user added 
    .catch(err => res.status(400).json('Error: ' + err));
});

// update user by id 
// this is working 
// like this /users/38293829102932
router.route('/:userId').patch((req, res) => {
  const id = req.params.userId;
  // define all the values that to update and then pass as params
  const displayName = req.body.displayName;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const about = req.body.about;
    const campdesc = req.body.campdesc; 
    const meta1 = req.body.meta1;
    // create a new instance of the user
    //const newUser = new User({displayName, firstName, lastName, about, campdesc, meta1 });
    User.updateOne({ _id: id}, {$set: req.body })
    .then(() => res.json('User added!')) // return user added 
  .catch(err => res.status(400).json('Error: ' + err));
  // save the new user to the db 
  //newUser.save()
  //.then(() => res.json('User added!')) // return user added 
  //.catch(err => res.status(400).json('Error: ' + err));
});

// this is working 
// like this /users/38293829102932
// delete a user by id 
router.delete("/:userId", (req, res, next) => {
    const id = req.params.userId;
    User.remove({ _id: id })
      .exec()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({
          error: err
        });
      });
  });

// export the router 
module.exports = router;