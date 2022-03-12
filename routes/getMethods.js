const express = require("express");

const router = express.Router();

router.get("/first", (req, res) => {
  res.send("<h1>First Page - Home</h1>");
});

router.get("/second", (req, res) => {
  res.send("<h2>Second Page - Products</h2>");
});

module.exports = router;
