const { User } = require("../models");
const bcrypt = require("bcrypt");

const UserController = {
  async register(req, res) {
    try {
      console.log(req.body);
      const { first_name, last_name, username, email, password, city } =
        req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = await User.Create({
        first_name,
        last_name,
        username,
        email,
        password: hashedPassword,
        city,
      });

      console.log(newUser);
      res
        .status(201)
        .json({ message: "User created successfully", user: newUser });
    } catch (error) {
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

module.exports = UserController;
