const authPage = (permissions) => {
  return (req, res, next) => {
    const userRole = req.body.role;
    console.log(userRole);
    if (permissions.includes(userRole)) {
      next();
    }
    return res.status(401).json("You are not authorized!");
  };
};

module.exports = {
  authPage,
};
