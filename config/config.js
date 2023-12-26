require("dotenv").config();
const { PORT, USER, HOST, DATABASE, PASSWORD } = process.env;

module.exports = {
  port: PORT,
  development: {
    username: USER,
    host: HOST,
    database: DATABASE,
    password: PASSWORD,
    dialect: "postgres",
  },
};
