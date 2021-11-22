var express=require('express');
var app=express();
//application middleware.........
// app.use(function(req,res,next){
//     console.log("middleware running");
//     next();
// })
app.get('/',function(req,res){
res.send("This is a home page");
})
app.get('/about',function(req,res){
    res.send("this is a about page");
})



app.use('/about',function(req,res,next){
     
    console.log("I am about Middle ware");
    next();
})
app.get('/contact',function(req,res){
    res.send("this is a Contact page")
})

app.listen(5000);