const path = require("node:path");
const registerPageController = (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "views", "cadastro.html"));
};

module.exports = {
  registerPageController,
};
