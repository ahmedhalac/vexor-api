const controller = require("../controllers/AuthController");
const middleware = require("../middleware");

module.exports = function (app) {
  app.post("/register", middleware.checkExistingEmail, controller.register);
  app.post("/login", controller.login);
  app.get(
    "/dashboard",
    [middleware.authenticateToken, middleware.checkUserRole(["admin"])],
    (req, res) => {
      res.send("this is a dashboard page.");
    }
  );

  //how to deal with roles, how to set that admin can see all other roles etc
};
