const { register, login } = require("../controllers/AuthController");
const { checkExistingEmail } = require("../middleware");

module.exports = function (app) {
  app.post("/api/register", checkExistingEmail, register);
  app.post("/api/login", login);
};
