const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/association")

let userSchema = mongoose.Schema({
    username: String,

    //Can also be written as
    email: {
        type: String
    },
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    }]
})

module.exports = mongoose.model('user', userSchema)