const controller = require("../controllers/AuthController");

module.exports = function (app) {
  app.post("/register", controller.register);
};
