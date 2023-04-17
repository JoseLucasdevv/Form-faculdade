const path = require("node:path");

const homePageController = (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "views", "index.html"));
};

module.exports = {
  homePageController,
};
