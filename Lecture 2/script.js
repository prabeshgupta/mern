// NodeJs File system module's all functionalities are stored in fs variable
const fs = require('fs')

// NodeJs Http module's all functionalities are stored in http variable
const http = require('http')

/*

* Write File
fs.writeFile("Lecture.txt", "Hello World!", function (err) {
    if (err) console.error(err)
    else console.log("Done")
})

* Append File
fs.appendFile("Lecture.txt", " I'm Prabesh Gupta", function (err) {
    if (err) console.error(err)
    else console.log("Done")
})

* Rename File
fs.rename("Lecture.txt", "Learn.txt", function (err) {
    if (err) console.error(err)
    else console.log("Renamed")
})

* Copy File
fs.copyFile("Learn.txt", "./Copy/Lecture.txt", function (err) {
    if (err) console.error(err.message)
    else console.log("Copied")
})

* Remove File
fs.unlink("Lecture.txt", function (err) {
    if (err) console.error(err.message)
    else console.log("Removed")
})

* Remove Directory and File
fs.rm("./Copy", { recursive: true }, function (err) {
    if (err) console.error(err.message)
    else console.log("Removed")
})

* Read File
fs.readFile("Lecture.txt", "utf-8", function (err, data) {
    if (err) console.error(err)
    else console.log(data)
})

? HTTP => Hypertext Transfer Protocol is a protocol / rule through which we send request and receive response from the internet.

*/


const server = http.createServer(function (req, res) {
    res.end("This is NodeJs server.")
})

server.listen(3000)




