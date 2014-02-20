var Product = require("../../models/product");

var createProduct = require("../../flows/create-product.js");

module.exports = function (app) {
  return function () {
    app.get("/", function (req, res) {
      res.render("admin/index", { message: "admin" });
    });

    app.get("/products", function (req, res) {
      Product.all(function (err, data) {
        res.render("admin/products/index", { products: data });
      });
    });

    app.get("/products/new", function (req, res) {
      res.render("admin/products/new");
    });

    app.post("/products", function (req, res) {
      createProduct(req.param("product"), function (err, result) {
        //if (err) {
          //res.end(JSON.stringify(err));
        //} else {
          res.redirect("/admin/products");
        //};
      });

      //var product = Product(req.param("product"));

      //product.save();

      //res.redirect("/admin/products");
    });
  };
};
