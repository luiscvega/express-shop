var products = require("./products");

module.exports = function (app) {
  return function () {
    app.get("/", function (req, res) {
      res.render("admin/index", { message: "admin" });
    });

    app.namespace("/products", products(app));
  };
};
