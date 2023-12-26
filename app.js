const express = require("express");
const config = require("./config/config");
const app = express();

const { Pool } = require("pg");

const { username, host, database, password } = config.development;
// Create a PostgreSQL pool
const pool = new Pool({
  user: username,
  host: host,
  database: database,
  password: password,
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

const port = config.port || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
