exports.dashboard = function (req, res) {
  res.render("admin/index", { message: "admin" });
};

exports.products = require("./products");
