import Sequelize from "sequelize";
import { development } from "../config/config.js";

const { user, host, database, password, dialect, poolConfig } = development;
const sequelizeOptions = {
  user,
  database,
  password,
  host,
  dialect,
  pool: poolConfig,
};

const sequelize = new Sequelize(sequelizeOptions);

const db = { sequelize, Sequelize };

export { sequelize, Sequelize };
export default db;
