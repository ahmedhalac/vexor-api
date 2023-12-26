const express = require("express");
const config = require("./config/config");
const app = express();

const { Pool } = require("pg");

const { user, host, database, password } = config.development;
// Create a PostgreSQL pool
const pool = new Pool({
  user,
  host,
  database,
  password,
  port: 5432, // Default PostgreSQL port
});

app.get("/", (req, res) => {
  res.send("Hello there!");
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

module.exports = app;
