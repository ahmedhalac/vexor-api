import express from "express";
import db from "./models/index.js";
const app = express();

app.get("/", (res) => {
  res.json({ message: "Welcome to the Vexor app" });
});

app.get("/db-test", async (req, res) => {
  try {
    await db.sequelize.authenticate();
    console.log("Connection has been established successfully.");
    res.end();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
});

export default app;
