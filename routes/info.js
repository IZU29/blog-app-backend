const express = require("express");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

router.get("/dashboard", authMiddleware, (req, res) => {
  res.json({ msg: "Welcome to the protected dashboard!", userId: req.user });
});

module.exports = router;
