import Sequelize from "sequelize";
import { development } from "../config/config.js";

const { user, host, database, password, dialect, poolConfig } = development;

const sequelize = new Sequelize(database, user, password, {
  host,
  dialect,
  pool: poolConfig,
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
