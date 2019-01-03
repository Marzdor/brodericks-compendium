const auth = require("basic-auth");
let admins = {};

if (process.env.NODE_ENV === "production") {
  admins[process.env.user] = { password: process.env.pass };
} else {
  admins = require("./config/key").admins;
}

module.exports = function(request, response, next) {
  var user = auth(request);
  if (!user || !admins[user.name] || admins[user.name].password !== user.pass) {
    response.set("WWW-Authenticate", 'Basic realm="example"');
    return response.status(401).send();
  }
  return next();
};