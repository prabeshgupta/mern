const express = require("express")
const userModel = require('./usermodel');
const app = express();


app.get("/", function (req, res) {
    res.send("Hello World!")
})

app.get("/create", async function (req, res) {
    //mongoose crud operations are always async in nature
    let userCreated = await userModel.create({
        name: "Aayush",
        age: 44,
        email: "aayushmax52@gmail.com",
        password: "Hello321"
    })

    res.send(userCreated)
})

app.get("/update", async function (req, res) {
    //userModel.findOneAndUpdate(find, update, { new: true })

    let updatedUser = await userModel.findOneAndUpdate({ email: "prabeshtech232@gmail.com" }, { age: 22 }, { new: true });

    res.send(updatedUser)
})

app.get("/read", async function (req, res) {
    //Read all users from database
    let readUser = await userModel.find()

    //Read specific user
    let readSpecificUser = await userModel.find({ email: "prabeshtech232@gmail.com" })

    //find gives result in array and if empty gives empty array, findOne gives result in object and prioritize the first one and if empty returns null

    let readf = await userModel.findOne({ password: "Hello321" })

    res.send(readUser)
})

app.get("/delete", async function (req, res) {
    let deletedUser = await userModel.findOneAndDelete({ name: "Aayush" });

    res.send(deletedUser)
})

app.listen(3000)