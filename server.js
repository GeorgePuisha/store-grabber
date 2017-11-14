const express = require("express");
const app = express();
const path = require("path");

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

app.get("/", function(req, res) {});

app.listen(process.env.PORT || 3000, function() {
    console.log("App is on 3000")
});