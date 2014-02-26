require("express-namespace");

var guest = require("./guest");
var admin = require("./admin");
var params = require("express-params");

module.exports = function (app) {
  params.extend(app);

  app.param("id", Number);

  app.get("/", guest.home);
  app.get("/login", guest.login);

  app.namespace("/admin", function () {
    app.get("/", admin.dashboard);
    app.get("/products", admin.products.list);
    app.post("/products", admin.products.create);
    app.get("/products/:id", admin.products.show);
    app.delete("/products/:id", admin.products.delete);
    app.get("/products/new", admin.products.new);
  });
};
