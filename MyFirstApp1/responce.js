var express = require('express');

app = express();
// simple string responce ...................
//res.send() .....>>responce body indicate
//res.end()...... >>responce ending point indicate
app.get("/one", function (req, res) {
    res.end("this is a simple string responce");

});

app.post("/two", function (req, res) {
    res.end("this is a simple string process");
});
//responce status code ........................
app.get("/three", function (req, res) {
    res.status(201).end();
});

//Json Responce ..............
app.get("/four", function (req, res) {
    let myJson = [
        {
            name: "Rafiul",
            roll: 492,
            city: "Pabna"
        },
        {
            name: "Bappy",
            roll: 493,
            city: "bogura"
        },
        {
            name: "rafi",
            roll: 494,
            city: "kushtia"
        }
    ]

    res.json(myJson);

    
})
//Download responce ......................>>>>>>
app.get('/five', (req, res)=> {
    res.download("./upload/abc.png");
})
//Redirect Responce ..........................
app.get('/bangla',(req,res)=>{
res.redirect('http://localhost:8000/india')
});
app.get('/india',(req,res)=>{
    res.send("this is a india");
});



//Header Responce................>>


app.get('/six',(req,res)=>{
    res.append("name","Rafiul islam");
    res.append("city","Pabna");

    res.append("age","23 years old");

    res.status(201).end("hello world");
})

//cookie Responce..............>.
app.get('/seven',(req,res)=>{


    res.cookie("name","Rafiul");
    res.cookie("age","23 years old");
    res.cookie("City","Kushtia");
    res.end("Cookie success full ");
})



//Clear Cookie responce.....................

app.get('/eight',(req,res)=>{
    res.clearCookie('name');
    res.clearCookie('age');
    res.end("Clear Cookie success");
})




app.listen(8000, function () {
    console.log("server run success");
})