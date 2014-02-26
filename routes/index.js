require("express-namespace");

var guest = require("./guest");
var admin = require("./admin");
var products = require("./admin/products");
var params = require("express-params");


module.exports = function (app) {
  params.extend(app);

  app.param("id", Number);

  app.get("/", guest.home);
  app.get("/login", guest.login);

  app.namespace("/admin", function () {
    app.get("/", admin.dashboard);
    app.get("/products", products.list);
    app.post("/products", products.create);
    app.get("/products/:id", products.show);
    app.delete("/products/:id", products.delete);
    app.get("/products/new", products.new);
  });
};
