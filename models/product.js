var Schema = require("jugglingdb").Schema;
var schema = new Schema("redis", { port: 6379 });

module.exports = schema.define("Product", {
  name: String,
  price: Number,
  created_at: { type: Number, default: Date.now }
});
