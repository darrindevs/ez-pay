const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Users collection and inserts the users below

mongoose.connect(process.env.ATLAS_URI || "mongodb://localhost/paymo");

const userSeed = [
  {
    displayName: "TomH",
    firstName: "Tom",
    lastName: "Hamilton",
    about: "guitar",
    meta1: "scarf"
  },
  {
    displayName: "ReedM",
    firstName: "Reed",
    lastName: "Mathis",
    about: "bass",
    meta1: "jams"
  },
  {
    displayName: "AronM",
    firstName: "Aron",
    lastName: "Magner",
    about: "keys",
    meta1: "ivory"
  },
  {
    displayName: "TimC",
    firstName: "Tim",
    lastName: "Carbone",
    about: "fiddle",
    meta1: "sweet"
  },
  {
    displayName: "SnarkyP",
    firstName: "Snarky",
    lastName: "Puppy",
    about: "horns",
    meta1: "snarky"
  }
  
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
