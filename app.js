// Configuring Dot Env
require("dotenv").config();

// Importing Packages
const express = require("express");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Enrolling user routes
app.use("/api/v1/user", require("./src/routes/user"));

// Exporting app
module.exports = app;
