var express = require('express');
var app = express();

//Simple request time logger
app.use(function(req, res, next){
   console.log("A new request received at " + Date.now());
   next();
});

app.listen(3000);
 
