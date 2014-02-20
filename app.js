var express = require("express");
var routes = require("./routes");
var params = require("express-params");
var path = require("path");

var app = express();

params.extend(app);
app.param("id", Number);

app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "jade");

routes(app);

app.listen(3000);
