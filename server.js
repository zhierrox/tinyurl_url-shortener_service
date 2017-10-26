var express = require("express");
var app = express();
var restRouter = require("./routes/rest");
var redirectRouter = require("./routes/redirect");
var indexRouter = require("./routes/index");

//help angular to get static files in index.html
app.use("/public", express.static(__dirname + "/public"));

app.use("/api/v1", restRouter);

app.use("/", indexRouter);

app.use("/:shortUrl", redirectRouter);

app.listen(3000);

console.log("node server starting...");