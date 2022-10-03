const express = require('express')
const app =express();
const path=require('path');

const PORT = process.env.PORT || 3030;




app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'view/home.html'))
})

app.get('/registro', function(req, res){
    res.sendFile(path.join(__dirname,'view/registro.html'))
})

app.get('/login', function (req, res){
    res.sendFile(path.join(__dirname,'view/login.html'))
})





app.use(express.static(path.join(__dirname,'./public')))

app.listen(3030,()=>console.log("http://localhost:3030"));


