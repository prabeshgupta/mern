const express = require('express')
const app = express();
const userModel = require('./models/user')
const postModel = require('./models/post')

app.get('/', function (req, res) {
    res.send("Hello World")
})

app.get('/create', async function (req, res) {
    let user = await userModel.create({
        username: "prabeshgupta",
        email: "prabeshtech232@gmail.com",
    })

    res.send(user)
})

app.get("/post/create", async function (req, res) {
    let post = await postModel.create({
        user: "664aeae42d500b54f8f1d65c",
        postData: "Nepal is enticing country.",
    })

    let user = await userModel.findOne({ _id: "664aeae42d500b54f8f1d65c" })
    user.posts.push(post._id);
    await user.save();

    res.send({ post, user })
})

app.listen(3000)