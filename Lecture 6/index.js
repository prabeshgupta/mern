const express = require('express')
const path = require('path')
const app = express();

// Parsers for form
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

/* Path setup Static files

__dirname gives path till current directory
console.log(__dirname + '\\public')

*/
app.use(express.static(path.join(__dirname, "public")));


//View means render. So, backend renders ejs pages
app.set("view engine", "ejs")

app.get("/", function (req, res) {
    res.render("index")
})

app.get("/home/:city/:ward", function (req, res) {
    //req params refers anything with : infront i.e. :city where : is req.params
    res.send(`Welcome to ${req.params.city} ward no ${req.params.ward}`)
})

app.listen(3000);