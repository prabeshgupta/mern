const express = require('express')
const app = express()

// Makes the json data readable
app.use(express.json())
//Makes the x-www-form-urlencoded data readable
app.use(express.urlencoded({ extended: true }))

app.get("/", function (req, res) {
    res.send("Form Handling");
})

app.listen(3000)