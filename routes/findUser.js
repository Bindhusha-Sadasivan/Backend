const express = require("express");
const router = express.Router();

const jwt = require("jsonwebtoken");

const User = require("../models/userModel");

// router.get("/finduser", async (req, res) => {
//   To get all data

//     const data = await User.find();
//   console.log(data);
//   res.send("Fetched Data");

// To get a data from a specific email

//   const data = await User.find({ username: "Jack" });
//   console.log(data);
//   res.send(data);

// To get only specific fiels

//   const data = await User.find(
//     {},
//     { email: 1, country: 1, _id: 0, password: 1 }
//   );
//   res.send(data);
// });

// router.post("/delete", async (req, res) => {
//   const responseData = await User.remove({ username: req.body.username });
//   console.log(responseData);
//   res.send("dummy");
// });

router.get(
  "/finduser",
  (req, res, next) => {
    try {
      // console.log(req.headers["authorization"]);
      const authheader = req.headers["authorization"];
      let token = authheader.replace("Bearer ", "");
      console.log(token);
      const decodedToken = jwt.verify(token, "jamesbond");
      console.log("Decoded Token", decodedToken);
      // const user = await User.findOne({ email: decodedToken.email });
      // req.user = user;
      next();
    } catch (err) {
      res.send(err);
    }
  },
  async (req, res) => {
    const data = await User.find(
      {},
      { username: 1, email: 1, _id: 1, password: 1 }
    );
    // console.log(data);
    res.send(data);
  }
);

module.exports = router;
