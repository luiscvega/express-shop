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
  createProduct(req.param("product"), function (errors, result) {
    if (errors) {
      res.render("admin/products/new", { errors: errors });
    } else {
      res.redirect("/admin/products");
    };
  });
};

exports.load = function (req, res, next) {
  getProduct({ id: req.params.id }, function (errors, product) {
    if (errors) {
      res.ender("admin/products/list", { errors: errors });
    } else {
      req.product = product;
      next();
    };
  });
};

exports.show = function (req, res) {
  res.render("admin/products/show", { product: req.product });
};

exports.delete = function (req, res) {
  deleteProduct({ product: req.product }, function (errors, result) {
    if (errors) {
      res.end(JSON.stringify(errors));
    } else {
      res.redirect("/admin/products");
    };
  });
};

exports.new = function (req, res) {
  res.render("admin/products/new");
};
