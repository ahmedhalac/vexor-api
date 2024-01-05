const controller = require("../controllers/AuthController");
const middleware = require("../middleware");

module.exports = function (app) {
  app.post("/register", middleware.checkExistingEmail, controller.register);

  app.get("/admin", middleware.roleCheckMiddleware(["admin"]), (req, res) => {
    res.send("This is the admin page");
  });
};
