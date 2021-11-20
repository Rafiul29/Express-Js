var express=require('express');
var app=express();
var bodyParse=require('body-parser');
app.use(bodyParse.json());
//request with url parameter...........
app.post('/a',(req,res)=>{
    let fN= req.query.fN;
   let lN= req.query.lN;
   res.send(`${fN} ${lN}`);
   
 });
//request Header..............
app.post('/a',function(req,res){
    let fN= req.header('fN');
    let lN= req.header('lN');
    res.send(`${fN} ${lN}`);
});

//request json body...............
app.post('/a',(req,res)=>{
    let JsonData=req.body;
    //let jsonString=JSON.stringify(JsonData);
    let name =JsonData.name;
    let city=JsonData.city;
    //res.send(jsonString);
    res.send(name+" "+city);
});
app.listen(8000,function(){
    console.log("server running ");
})