module.exports = function (app) {
  return function () {
    app.get("/", function (req, res) {
      res.render("guest/index", { message: "guest" });
    });

    app.get("/login", function (req, res) {
      res.render("guest/login");
    });
  }
};
