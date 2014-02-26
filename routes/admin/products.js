var createProduct = require("../../flows/create-product");
var deleteProduct = require("../../flows/delete-product");
var getProducts = require("../../flows/get-products");
var getProduct = require("../../flows/get-product");
var Product = require("../../models/product");

exports.list = function (req, res) {
  getProducts({}, function (err, result) {
    res.render("admin/products/list", { products: result });
  });
};

exports.create = function (req, res) {
  createProduct(req.param("product"), function (err, result) {
    if (err) {
      res.end(JSON.stringify(err));
    } else {
      res.redirect("/admin/products");
    };
  });
};

exports.show = function (req, res) {
  getProduct({ id: req.params.id }, function (err, product) {
    res.render("admin/products/show", { product: product });
  });
};

exports.delete = function (req, res) {
  deleteProduct({ id: req.param("id") }, function (err, result) {
    if (err) {
      res.end(JSON.stringify(err));
    } else {
      res.redirect("/admin/products");
    };
  });
};

exports.new = function (req, res) {
  res.render("admin/products/new");
};
