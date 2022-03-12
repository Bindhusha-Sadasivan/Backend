const jwt = require("jsonwebtoken");

const authorize = (req, res, next) => {
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
};

module.exports = authorize;
