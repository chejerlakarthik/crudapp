const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./app/routes");
const mongoose = require('mongoose');

var app = express();
mongoose.connect("mongodb://localhost:27017/local");

app.set('port',3000);
app.use(bodyParser.json());

app.use('/', routes);

app.listen(app.get('port'), function(){
  console.log("Server started on port", app.get('port'));
});
