import { config as loadEnvConfig } from "dotenv";
loadEnvConfig();

const { DB_USER, DB_HOST, DB_NAME, DB_PASSWORD } = process.env;

const development = {
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  dialect: "postgres",
  poolConfig: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000,
  },
};

const test = {
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  dialect: "postgres",
};

const production = {
  user: DB_USER,
  host: DB_HOST,
  database: DB_NAME,
  password: DB_PASSWORD,
  dialect: "postgres",
};

export { development, test, production };
