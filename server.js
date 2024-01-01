const app = require("./src/app.js");

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

module.exports = server;
