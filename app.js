require("dotenv").config();
require("./utils");
const express = require("express");
const spotifyRoutes = require("./routes/youtube");
const path = require("path");
const app = express();
const port = 8000;
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PUT, POST, DELETE, PATCH, OPTIONS"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Request-With"
  );
  next();
});

// Middleware to parse JSON and form-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", spotifyRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
