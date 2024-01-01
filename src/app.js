const express = require("express");
const app = express();

app.get("/", (res) => {
  res.json({ message: "Welcome to the Vexor app" });
});

module.exports = app;
