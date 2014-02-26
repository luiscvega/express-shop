var outflow = require("outflow");
var Product = require("../models/product");

module.exports = outflow({
  validations: function (assert, attributes) {
  },

  success: function (attributes, callback) {
    attributes.product.destroy(function (err, data) {
      callback(null, data);
    });
  }
});
