const express = require("express");
const router = express.Router();

// router.set("view engine", "hbs");

router.get("/firsthbs", (req, res) => {
  //   res.render("index");
  const data = "Hello Peter";
  res.render("index", { greet: data });
});

module.exports = router;
