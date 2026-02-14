const express = require("express");
const router = express.Router();
const { getRecommendation } = require("../controllers/recommendController");

router.post("/recommend", getRecommendation);

module.exports = router;
