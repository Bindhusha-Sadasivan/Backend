const express = require("express");

const router = express.Router();

router.get("/products", (req, res) => {
  const data = "Redmi";
  res.render("products", { product: data });
});

module.exports = router;
