const roleCheckMiddleware = (permissions) => {
  //check logged in user and then find its role this is not right!!!
  return (req, res, next) => {
    const userRole = req.body.role;
    if (!permissions.includes(userRole)) {
      return res.status(401).json("You are not authorized!");
    }
    next();
  };
};

module.exports = roleCheckMiddleware;
