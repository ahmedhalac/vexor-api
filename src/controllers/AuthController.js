const { User } = require("../models");
require("dotenv").config();
var pg = require("pg");

const register = (req, res) => {
  console.log("OVO JE RESPONSE::", req.body);
};

module.exports = {
  register,
};
