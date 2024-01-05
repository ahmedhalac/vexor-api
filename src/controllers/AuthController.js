const { User } = require("../models");
const bcrypt = require("bcrypt");
const UserRoles = require("../enums/roles");

const UserController = {
  async register(req, res) {
    try {
      const {
        first_name,
        last_name,
        username,
        email,
        password,
        city,
        phone_number,
      } = req.body;

      const hashedPassword = await bcrypt.hash(password, 10);

      let role = UserRoles.USER;

      if (req.body.email === "adminvexor@gmail.com") {
        role = UserRoles.ADMIN;
      }

      const newUser = await User.create({
        first_name,
        last_name,
        username,
        email,
        password: hashedPassword,
        city,
        phone_number,
        role,
      });

      res
        .status(201)
        .json({ message: "User created successfully", user: newUser });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal server error" });
    }
  },
};

module.exports = UserController;
