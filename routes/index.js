var guest = require("./guest");
var admin = require("./admin");
var products = require("./admin/products");

module.exports = function (app) {
  app.get("/", guest.home);
  app.get("/login", guest.login);
  app.get("/admin", admin.dashboard);
  app.get("/admin/products", products.list);
  app.post("/admin/products", products.create);
  app.get("/admin/products/:id", products.show);
  app.del("/admin/products/:id", products.delete);
  app.get("/admin/products/new", products.new);
};
