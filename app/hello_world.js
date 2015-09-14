/**
 * Created by daniel.pacurici on 14.09.2015.
 */
var express = require("express");
var app = express();

app.get('/', function (req, res) {
    res.send("Hello World");
});

app.listen(3000, function () {
    console.log("application listening at port 3000...");
});