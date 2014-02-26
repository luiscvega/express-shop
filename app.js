var express = require("express");
var routes = require("./routes");
var path = require("path");

var app = express();

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "jade");

routes(app);

app.listen(3000);
