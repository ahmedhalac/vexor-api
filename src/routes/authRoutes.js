const controller = require("../controllers/AuthController");
const middleware = require("../middleware");

module.exports = function (app) {
  app.post("/api/register", middleware.checkExistingEmail, controller.register);
  app.post("/api/login", controller.login);
};
