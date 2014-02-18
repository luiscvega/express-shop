require("express-namespace");

var guest = require("./guest");
var admin = require("./admin");

module.exports = function (app) {
  app.namespace("", guest(app));
  app.namespace("/admin", admin(app));
};
