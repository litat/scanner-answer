var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();

app.use(express.static(__dirname));

var port = 8080;
app.listen(port);
console.log("App listening on http://localhost:" + port);
