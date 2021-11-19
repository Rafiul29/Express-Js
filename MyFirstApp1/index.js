var express = require('express');
app = express();

app.get("/", function (req, res) {
    res.send("Express js Home Page");
});
app.post('/about', (req, res) => {
    res.send('Hello World! About Page')
  });
  app.put('/contact', (req, res) => {
    res.send('Hello World! Contact Page')
  });
  app.delete('/terms', (req, res) => {
    res.send('Hello World! Terms Page')
  })
app.listen(8000, function () {
    console.log("server run success");
})