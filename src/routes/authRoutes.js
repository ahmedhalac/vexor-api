const { register, login } = require("../controllers/AuthController");
const { checkExistingEmail } = require("../middlewares");

const authRoutes = (app) => {
  app.post("/api/register", checkExistingEmail, register);
  app.post("/api/login", login);
};

module.exports = authRoutes;
