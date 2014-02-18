var createProduct = require("../../flows/create-product.js");

module.exports = function (app) {
  return function () {
    app.get("/", function (req, res) {
      res.render("admin/index", { message: "admin" });
    });

    app.get("/products/new", function (req, res) {
      res.render("admin/products/new");
    });

    app.post("/products", function (req, res) {
      var product = req.body.product;
      var scribe = createProduct(product);

      if (scribe.isValid) {
        res.redirect("/admin");
      } else {
        res.redirect("/admin/products/new?boom=box");
      }
    });
  };
};
