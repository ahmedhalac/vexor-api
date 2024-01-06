const controller = require("../controllers/AuthController");
const middleware = require("../middleware");

module.exports = function (app) {
  app.post("/register", middleware.checkExistingEmail, controller.register);
  app.post("/login", controller.login);
};
