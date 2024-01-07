const path = require("path");
const dotenv = require("dotenv");
const envPath = path.join(__dirname, "../../.env");
dotenv.config({ path: envPath });

const { DB_USER, DB_HOST, DB_NAME, DB_PASSWORD } = process.env;

module.exports = {
  development: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "postgres",
  },
  test: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "postgres",
  },
  production: {
    username: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    dialect: "postgres",
  },
};
