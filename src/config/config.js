import { config } from "dotenv";
config();

const { USER, HOST, DATABASE, PASSWORD } = process.env;

export const development = {
  user: USER,
  host: HOST,
  database: DATABASE,
  password: PASSWORD,
  dialect: "postgres",
};
