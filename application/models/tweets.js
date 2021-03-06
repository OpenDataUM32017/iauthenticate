// app/models/user.js
// load the things we need
const mongoose = require('mongoose')
const bcrypt   = require('bcrypt-nodejs')

// define the schema for our user model
const tweetsSchema = mongoose.Schema({
		tweet_id: Number,
        user: String,
        tweet: String,
        date: String,
		
})



// methods ======================

// create the model for users and expose it to our app
const configDB = require('../../config/database.js')
const db = mongoose.createConnection(configDB.url)
//module.exports = mongoose.model('User', userSchema)
module.exports = db.model('tweets', tweetsSchema)
