const cookieParser = require("cookie-parser");
const bcrypt = require('bcrypt')
const express = require("express")
const jwt = require("jsonwebtoken")
const app = express();

//Create a middleware to use Cookie Parser 
app.use(cookieParser())

app.get("/", function (req, res) {
    // Set the cookies from server to browser res.cookie("name", "value")
    res.cookie("device", "acer")
    res.send("Hello friend!")
})

app.get("/profile", function (req, res) {
    //Once the cookies has been set, It will be sent to every routes you visit by embeding to your request

    //Read the cookies
    console.log(req.cookies)
    res.send("Welcome to profile")
})

app.get("/bcrypt", function (req, res) {

    // Password encryption
    bcrypt.genSalt(10, function (err, salt) {
        bcrypt.hash("myPlaintextPassword", salt, function (err, hash) {
            // console.log(salt)
            console.log(hash)
            res.send("Bcrypt")
        });
    });
})

app.get("/dcrypt", function (req, res) {
    //Actually, the server stores the encrypted password in the database. When user logins to the system, he/she enters the regular password but it will be encrypted and compared with the saved encrypted password. 
    bcrypt.compare("myPlaintextPassword", "$2b$10$lOuWmOk4u7OzIuJCXzsl6eZ7yexBVG38JcOUb0NebLVoYgkn1Gs.a", function (err, result) {
        console.log(result)
        res.send("Decrypted")
    });
})


//JWT is a long encrypted string sent by server to user browser and stored in cookies. When browser makes a new request, the cookies is sent sent to the server automatically and server decrypts the encrypted string using JWT to read the data. This is used because because server forgets you everytime.
app.get("/jwt", function (req, res) {
    let token = jwt.sign({ email: "prabeshtech232@gmail.com" }, "secret")
    res.cookie("token", token)
    res.send("JWT ")
})

app.get("/data", function (req, res) {
    let data = jwt.verify(req.cookies.token, "secret")
    console.log(data)
    res.send("Data is decrypted")
})

app.listen(3000)