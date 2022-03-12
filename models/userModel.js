// Connect to mongoose

const mongoose = require("mongoose");

// Connecting to DB

mongoose
  .connect("mongodb://localhost/Education")
  .then(() => console.log("Connected to MongoDB..."))
  .catch((e) => console.error("Couldn't connect to DB!!!", e));

const universitySchema = mongoose.Schema({
  username: String,
  email: {
    type: String,
    // unique: true,
    // required: true,
    // required: [true, "E-mail already taken"],
  },
  password: String,
  department: String,
  mobile: Number,
  city: String,
  pincode: Number,
  country: {
    type: [String],
    default: "IND",
  },
  interest: {
    type: [String],
    enum: ["react", "node", "express"],
  },
});

const User = mongoose.model("University", universitySchema);

// const user1 = new User({
//   username: "Jack",
//   email: "jack@email.com",
//   password: "jack123",
//   department: "FSD",
//   mobile: 987654321,
//   city: "MS",
//   pincode: "600001",
//   interest: ["node"],
//   country: "AUS",
// });

// const user2 = new User({
//   username: "Jill",
//   email: "jill@email.com",
//   password: "jill123",
//   department: "Front End",
//   mobile: "978654321",
//   city: "TVM",
//   pincode: "500001",
//   interest: ["react"],
// });

// user1.save().then(() => console.log("User1 created successfully...!!!"));

// user2.save().then(() => console.log("User2 created successfully..."));

module.exports = User;
