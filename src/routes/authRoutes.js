const controller = require("../controllers/AuthController");
const { authPage } = require("../middleware/authMiddleware");
const emailCheckMiddleware = require("../middleware/emailCheckMiddleware");

module.exports = function (app) {
  app.post("/register", emailCheckMiddleware, controller.register);

  app.get("/admin", authPage(["admin"]), (req, res) => {
    res.send("This is the admin page");
  });
};
