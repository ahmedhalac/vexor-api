const express = require("express");
const config = require("./config/config");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello there!");
});

const port = config.port || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});
