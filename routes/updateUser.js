const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");

const User = require("../models/userModel");

const authorize = require("../middleware/authorize");

router.post("/updateuser", authorize, async (req, res) => {
  // Update the username
  //   const reqData = req.body;
  //   const data = await User.findOne({ email: reqData.email });
  //   //   console.log(data);
  //   const updatedUname = await User.findByIdAndUpdate(data._id, {
  //     username: reqData.updatedUsername,
  //   });
  //   console.log(updatedUname);
  //   res.send("Updated the username...");

  //   const reqData = req.body;
  //   const data = await User.findOne({ email: reqData.email });
  //   if (data) {
  //     const updatedUname = await User.findByIdAndUpdate(data._id, {
  //       username: reqData.updatedUsername,
  //     });
  //     //   console.log(updatedUname);
  //     res.send("Updated the username...");
  //   } else {
  //     res.send("User not found");
  //   }

  // Update the password

  const reqData = req.body;
  const hashedPassword = await bcrypt.hash(reqData.updatedPassword, 7);

  const data = await User.findOne({ email: reqData.email });
  if (data) {
    const updatedPword = await User.findByIdAndUpdate(data._id, {
      password: hashedPassword,
    });
    //   console.log(updatedUname);
    res.send("Updated the Password...");
  } else {
    res.send("User not found");
  }
});

module.exports = router;
