const exp = require("express");
const app = exp();

const asyncErrHandler = require("express-async-handler");

const exphbs = require("express-handlebars");

const axios = require("axios");

require("dotenv").config();

//var hbs = exphbs.create({ /* config */ });
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get("/users", asyncErrHandler(async(req,res,next)=>{
    let users = await axios.get("https://jsonplaceholder.typicode.com/users");

    res.render('users',{"user":users.data});
    console.log(users.data);
}))

app.get("/posts", asyncErrHandler(async(req,res,next)=>{
    let posts = await axios.get("https://jsonplaceholder.typicode.com/posts");

    res.render('posts',{"post":posts.data});
    console.log(posts.data);
}))

app.get("/comments", asyncErrHandler(async(req,res,next)=>{
    let comments = await axios.get("https://jsonplaceholder.typicode.com/comments");

    res.render('comments',{"comment":comments.data});
    console.log(comments.data);
}))

port = process.env.PORT;
app.listen(port, ()=>{console.log(`Web server started at ${port}..`)})