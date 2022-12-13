// Configuring Dot Env
require("dotenv").config();

// Importing Packages
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Exporting app
module.exports = app;
