//Importing the mongoose package in the const mongoose -> It acts as an intermediate for connecting the application server with the database server.
const mongoose = require("mongoose")

//Create database named leaernbackend
mongoose.connect(`mongodb://localhost:27017/learnbackend`)

//Schema refers what details each user will have
const userSchema = mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String
})

//Creation of model then only we can perform CRUD operations and exporting the model so it can used with routes
module.exports = mongoose.model("user", userSchema)







