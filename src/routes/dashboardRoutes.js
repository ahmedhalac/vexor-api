const controller = require("../controllers/AuthController");
const { authenticateToken, checkRoutePermissions } = require("../middleware");

module.exports = function (app) {
  app.get(
    "/api/dashboard",
    [authenticateToken, checkRoutePermissions],
    (_, res) => {
      res.send("this is a dashboard page.");
    }
  );
};
