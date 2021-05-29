const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const projectSchema = new Schema({
    creator: { type: Integer, required: true },
    description: { type: String, required: true },
    meta1: { type: String, required: true },
    meta2: { type: String, required: true }

{
    timestamps: true,
}); 

 const User = mongoose.model('Project', userSchema);

 module.exports = User;

