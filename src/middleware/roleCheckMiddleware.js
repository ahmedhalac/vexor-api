const { User } = require("../models");
const checkUserRole = (permissions) => {
  return async (req, res, next) => {
    try {
      const user = await User.findByPk(req.id);
      if (!permissions.includes(user.role)) {
        return res.status(401).json("You are not authorized!");
      }
      next();
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
};

module.exports = checkUserRole;
