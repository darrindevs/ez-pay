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


// '/users/:id'
// get a user by id 
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

//todo add updating 



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

//refs https://www.youtube.com/watch?v=7CqJlxBYj-M&t=513s
//refs https://www.youtube.com/watch?v=WDrU305J1yw