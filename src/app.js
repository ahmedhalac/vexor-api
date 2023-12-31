import express from "express";
import { development } from "./config/config.js";
import pg from "pg";

const app = express();

const { user, host, database, password } = development;
// Create a PostgreSQL pool
const pool = new pg.Pool({
  user,
  host,
  database,
  password,
  port: 5432, // Default PostgreSQL port
});

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Vexor app" });
});

async function connectAndQuery() {
  let client;
  try {
    client = await pool.connect();
    const result = await client.query("SELECT NOW()");
    console.log("Result:", result.rows);
  } catch (err) {
    console.error("Error executing query", err);
  } finally {
    // Release the client back to the pool
    if (client) client.release();
    // Close the pool
    await pool.end();
  }
}

connectAndQuery();

export default app;
