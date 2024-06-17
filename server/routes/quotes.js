const express = require("express");
const router = express.Router();
const quotesController = require("../controllers/quotesController");

router.get("/search", quotesController.searchQuotes);

module.exports = router;
