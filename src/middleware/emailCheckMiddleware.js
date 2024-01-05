const { User } = require("../models");

const checkExistingEmail = async (req, res, next) => {
  try {
    const existingEmail = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (existingEmail) {
      return res
        .status(400)
        .json({ message: "The email you have entered alread exists!" });
    }
    next();
  } catch (error) {
    console.error(error);
  }
};

module.exports = checkExistingEmail;
