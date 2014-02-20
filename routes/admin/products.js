var createProduct = require("../../flows/create-product");
var getProducts = require("../../flows/get-products")

module.exports = function (app) {
  return function () {
    app.get("/", function (req, res) {
      getProducts({}, function (err, result) {
        res.render("admin/products/index", { products: result });
      });
    });

    app.post("/", function (req, res) {
      createProduct(req.param("product"), function (err, result) {
        if (err) {
          res.end(JSON.stringify(err));
        } else {
          res.redirect("/admin/products");
        };
      });
    });

    app.get("/new", function (req, res) {
      res.render("admin/products/new");
    });
  };
};
