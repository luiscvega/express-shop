exports.home = function (req, res) {
  res.render("guest/index", { message: "guest" });
};

exports.login = function (req, res) {
  res.render("guest/login");
};
