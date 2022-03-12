const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

router.post("/signin", async (req, res) => {
  const data = req.body;

  // res.send("Signed in successfully...!!!");
  // console.log(data);

  // const result = await User.findOne({ email: data.email });
  // const result = await User.findOne({ country: data.country });
  // console.log(result);

  // const result = await User.find();
  // const result = await User.findOne({ email: data.email });
  // const output = result.filter((item) => item.country === "TVM");
  // console.log(output);

  // const result = await User.findOne({ email: data.email });
  // console.log(result);

  // if (result.password === data.password) {
  //   res.send("Signed in successfully...****");
  // } else {
  //   res.send("Invalid Credentials...----");
  // }

  // const result = await User.findOne({ email: data.email });

  // console.log(result.password, data.password);

  // const authenticate = await bcrypt.compare(data.password, result.password);

  // if (authenticate) {
  //   res.send("Sign in successfull - Authenticated");
  // } else {
  //   res.send("Invalid Credentials - Unauthenticated");
  // }

  // JWT Token

  const result = await User.findOne({ email: data.email });

  // console.log(result.password);

  const authenticate = await bcrypt.compare(data.password, result.password);

  if (authenticate) {
    const token = jwt.sign({ email: result.email }, "jamesbond");
    console.log(token);
    // res.send("Authorized");
    res.send({ msg: "success", status: true, token: token });
  } else {
    res.send("Unauthorized");
  }
});

module.exports = router;
