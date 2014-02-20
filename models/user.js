var Schema = require("jugglingdb").Schema;
var schema = new Schema("redis", { port: 6379 });

module.exports = schema.define("User", {
  username: String,
  email: String,
  password: String,
  created_at: { type: Number, default: Date.now }
});
