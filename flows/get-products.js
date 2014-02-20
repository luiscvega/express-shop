var Product = require("../models/product");
var outflow = require("outflow");

module.exports = outflow({
  validations: function () {
  },

  success: function (attributes, callback) {
    Product.all(function (err, data) {
      if (err) {
        callback(err);
      } else {
        callback(null, data);
      };
    });
  }
});
