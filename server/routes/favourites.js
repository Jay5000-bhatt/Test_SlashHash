const express = require("express");
const router = express.Router();
const favouritesController = require("../controllers/favouritesController");

router.post("/", favouritesController.addFavourite);
router.get("/", favouritesController.getFavourites);

module.exports = router;
