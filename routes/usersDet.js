const router = require("express").Router();

const userDetails = require("../controllers/userDetController");

// router.get("/api/submit", userDetails);
router.post("/api/submit", userDetails);

module.exports = router;
