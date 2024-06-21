const Roles = require("../src/enums/roles");

const routePermissions = {
  "/api/dashboard": [Roles.ADMIN, Roles.USER, Roles.MODERATOR],
};

module.exports = {
  routePermissions,
};
