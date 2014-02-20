var outflow = require("outflow");
var Product = require("../models/product");

module.exports = outflow({
  validations: function (assert, attributes) {
    assert(attributes.name.length > 0, ["name", "cannot be blank"]);
  },

  success: function (attributes, callback) {
    var product = Product(attributes);
    product.save();

    callback(null, product);
  }
});
