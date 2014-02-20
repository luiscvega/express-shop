var outflow = require("outflow");
var Product = require("../models/product");

module.exports = outflow({
  validations: function () {
  },

  success: function (attributes) {
    var product = Product(attributes);
    product.save();

    return product;
  }
});
