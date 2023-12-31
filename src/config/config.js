import { config as loadEnvConfig } from "dotenv";
loadEnvConfig();

const { USER, HOST, DATABASE, PASSWORD } = process.env;

const development = {
  user: USER,
  host: HOST,
  database: DATABASE,
  password: PASSWORD,
  dialect: "postgres",
  poolConfig: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000,
  },
};

const test = {
  user: USER,
  host: HOST,
  database: DATABASE,
  password: PASSWORD,
  dialect: "postgres",
};

const production = {
  user: USER,
  host: HOST,
  database: DATABASE,
  password: PASSWORD,
  dialect: "postgres",
};

export { development, test, production };