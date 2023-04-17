const express = require("express");
const { homePageController } = require("./controllers/homePageController");
const { cardPageController } = require("./controllers/cardController");
const {
  registerPageController,
} = require("./controllers/registerPageController");

const router = express.Router();

router.get("/", homePageController);
router.get("/cadastro.html", registerPageController);
router.get("/card.html", cardPageController);

module.exports = {
  router,
};
