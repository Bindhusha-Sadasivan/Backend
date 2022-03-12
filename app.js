const express = require("express");

const bodyparser = require("body-parser");

const cors = require("cors");

const getRoutes = require("./routes/getMethods");

const ssr = require("./routes/handlebar"); //Server Side Rendering - HBS

const jde = require("./routes/jadeEngine");

const signup = require("./routes/signUp");

const signin = require("./routes/signIn");

const finduser = require("./routes/findUser");

const updateuser = require("./routes/updateUser");

const app = express();

// app.use("/redirect", getRoutes);

app.use(bodyparser.json());

app.use(cors());

app.use("/", getRoutes);

app.use("/", ssr);

app.use("/", jde);

app.use("/", signup);

app.use("/", signin);

app.use("/", finduser);

app.use("/", updateuser);

// app.set("view engine", "hbs");

app.set("view engine", "jade");

app.listen(3000, () => {
  console.log("Connecting on port 3000... Server started...");
});
