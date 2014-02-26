exports.dashboard = function (req, res) {
  res.render("admin/index", { message: "admin" });
};
