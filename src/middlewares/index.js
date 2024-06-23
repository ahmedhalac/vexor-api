const { checkRoutePermissions } = require("./RoutePermissions");
const { checkExistingEmail } = require("./EmailCheck");
const { authenticateToken } = require("./AuthCheck");

module.exports = {
  checkRoutePermissions,
  checkExistingEmail,
  authenticateToken,
};
