//Importing express package in the express constant
const express = require('express')

//express constant stores a function and we declare a constant named app which will have all the powers and functionalities of the express 
const app = express()

/* 
*Routes: Anything after domain is route. We create the routes to display the different contents.

stylon.vercel.app/  -- / is the default route
stylon.vercel.app/profile -- /profile is the route

*/

// app.get(route, RequestHandler)


/* 
* Middleware: Before passing the request to the route, we can perform some operations using the middleware. 

Request -> Server accept -> Middleware -> Route -> Response

next() is used to forward the request to the route or another middleware. 

*/

var counter = 0;

app.use(function (req, res, next) {
    counter++;
    console.log(counter)
    next()
})

app.get("/", function (req, res) {
    res.send("Hello World")
})

app.get("/profile", function (req, res, next) {
    // Return will stop the route. The error is shown in console
    return next(new Error("Something is fishy!"))
})


// Error handling
app.use((err, req, res, next) => {
    console.error(err.message)
    // Error will be shown in frontend
    res.status(500).send('Something broke!')
})

app.listen(3000)