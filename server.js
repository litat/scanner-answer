var http = require('http');
var express = require('express');
var app = express();

app.use(express.static(__dirname));

var port = 8080;
app.listen(port);
console.log("App listening on http://localhost:" + port);
