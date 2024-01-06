require("dotenv").config();
const { User } = require("../models");
const bcrypt = require("bcrypt");
const UserRoles = require("../enums/roles");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
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
    res.status(500).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
      return res.status(401).json({ message: "Wrong password" });
    }

    const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, {
      expiresIn: 86400,
    });

    res.status(200).json({
      id: user.id,
      username: user.username,
      email: user.email,
      role: user.role,
      token,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
