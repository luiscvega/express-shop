var createProduct = require("../../flows/create-product");
var deleteProduct = require("../../flows/delete-product");
var getProducts = require("../../flows/get-products");
var Product = require("../../models/product");

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

    app.param("id", Number);
    app.get("/:id", function (req, res) {
      Product.find(req.params.id, function (err, product) {
        res.render("admin/products/show", { product: product });
      });
    });

    app.del("/:id", function (req, res) {
      deleteProduct({ id: req.param("id") }, function (err, result) {
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
