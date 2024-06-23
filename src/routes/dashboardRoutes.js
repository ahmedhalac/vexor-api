const controller = require("../controllers/AuthController");
const { authenticateToken, checkRoutePermissions } = require("../middlewares");

const dashboardRoutes = (app) => {
  app.get(
    "/api/dashboard",
    [authenticateToken, checkRoutePermissions],
    (_, res) => {
      res.send("this is a dashboard page.");
    }
  );
};

module.exports = dashboardRoutes;
