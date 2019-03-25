const mongoose = require('mongoose');
// const Schema = mongoose.Schema;
const {Schema} = mongoose;

// create a schema
const userSchema = new Schema({
    googleId: String
});

// create new collection called users, load schema into mongoose
mongoose.model('users', userSchema);