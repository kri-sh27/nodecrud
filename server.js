const express = require('express');
const app = express();


app.get("/",(req,res)=>{
        res.send("<h1>hello node API</h1>");
});

app.get("/blog",(req,res)=>{
    res.send("<h1>Hello blog</h1>");
});

app.listen(3000, ()=>{
    console.log("running on 3000");
});