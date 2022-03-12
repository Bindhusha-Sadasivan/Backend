const express = require("express");

const router = express.Router();

const bcrypt = require("bcrypt");

const User = require("../models/userModel");

router.post("/signup", async (req, res) => {
  // res.send("Request received...");
  // console.log(req.body);

  const data = req.body;

  let hashdata = await bcrypt.hash(data.password, 7);
  // console.log("Hashed Data", hashdata);

  // data.password = await bcrypt(data.password);

  data.password = hashdata;

  let user1 = new User({
    username: data.username,
    email: data.email,
    password: data.password,
    department: data.department,
    mobile: data.mobile,
    city: data.city,
    pincode: data.pincode,
    country: data.country,
    interest: data.interest,
  });

  user1
    .save()
    .then(() => res.send("User signed up successfully...."))
    .catch((error) => console.log("Error in Sign Up!!!", error));
});

// router.post("/signup", (req, res) => {
//   console.log(req.body);
//   res.send("Request Received");
// });

module.exports = router;
