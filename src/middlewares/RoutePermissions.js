const { User } = require("../models");
const { routePermissions } = require("../../config/routePermissions");

const checkRoutePermissions = async (req, res, next) => {
  try {
    const user = await User.findByPk(req.id);
    const currentRoute = req.originalUrl;

    if (
      routePermissions[currentRoute] &&
      routePermissions[currentRoute].includes(user.role)
    ) {
      return next();
    }
    return res.status(403).json({ message: "Unauthorized" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  checkRoutePermissions,
};
