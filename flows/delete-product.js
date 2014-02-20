var outflow = require("outflow");
var Product = require("../models/product");

module.exports = outflow({
  validations: function () {
  },

  success: function (attributes, callback) {
    Product.find(attributes.id, function (err, data) {
      data.destroy(function (err, data) {
        callback(null, data);
      });
    });
  }
});
