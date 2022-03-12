const express = require("express");

// Middleware to parse req.body - auto convert to string
const bodyParser = require("body-parser");
const res = require("express/lib/response");

const app = express();

app.use(bodyParser.json());

// ========================================== app.get =======================================================

app.get("/home", (request, response) => {
  console.log(request);
  response.send("Received the get request");
});

app.get("/json", (request, response) => {
  response.send("{fname:bindhusha, reg.no:1234}");
});

app.get("/products", (request, response) => {
  // console.log(request);
  // console.log(request.query.productname);
  // console.log(request.query.price);
  // if (request.query.productname === "redmi" && request.query.price === "2000")
  if (request.query.productname === "redmi" && request.query.price <= 2000)
    response.send("Successfully loaded");
});

app.get("/html", (request, response) => {
  response.send("<h1> HTML Response</h1> <br/> <h2> Second Response </h2>");
});

app.get("/search/:productname/:price", (request, response) => {
  // response.send("test");
  // response.send(request.params);
  const parameters = request.params;
  if (parameters.productname === "lenovo" && parameters.price === "2000")
    response.send("Ear Buds");
});

app.get("*", (request, response) => {
  response.send("404 Not Found");
});

// ========================================== app.get =======================================================

// ========================================== app.post ======================================================

app.post("/login", (request, response) => {
  // console.log(request.body);
  // response.send("Logged in Successfully");
  const data = request.body;
  if (data.username === "admin" && data.password === "pass@123")
    response.send("Signed in Successful");
  else response.send("Invalid credentials");
});

// ========================================== app.post ======================================================

// ========================================== app.listen ====================================================

app.listen(3001, () => {
  console.log("Server Started");
});

// ========================================== app.listen =====================================================
