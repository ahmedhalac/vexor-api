const Roles = require("../src/enums/roles");

const routePermissions = {
  "/api/dashboard": [Roles.ADMIN],
};

module.exports = {
  routePermissions,
};
