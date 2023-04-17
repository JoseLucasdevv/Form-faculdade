const path = require("node:path");
const cardPageController = (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "views", "card.html"));
};

module.exports = {
  cardPageController,
};
