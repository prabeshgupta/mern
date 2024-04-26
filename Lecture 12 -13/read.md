Basic application with crud operations using mongodb

app.post("/create", async function(req, res){

//Destructing the req.body
let {name, email, password} = req.body;

let createdUser =  await userModel.create({
    name: name,
    email, // Similar to email: email
    password
});

res.redirect("/read") // redirects to read route
})


app.get("/read", async function(req, res){
    let users = await userModal.find();

    res.render("read", {users}) // Renders read.ejs page
})