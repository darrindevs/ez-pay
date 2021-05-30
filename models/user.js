const mongoose = require('mongoose');

// create the schema 
const Schema = mongoose.Schema;

const userSchema = new Schema({
    //_id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    about: {
        type: String,
        required: false
    },
    campdesc: {
        type: String,
        required: false
    },
    meta1: {
        type: String,
        required: false
    },
    meta2: {
        type: String,
        required: false
    },
    meta3: {
        type: String,
        required: false
    }
}, 

{
    timestamps: true,
}); 

// todo slugify the user https://scotch.io/courses/create-a-crud-app-with-node-and-mongodb/a-mongoose-model

// create the model 
 const User = mongoose.model('User', userSchema);

 module.exports = User;

