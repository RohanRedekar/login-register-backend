const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());


const userController = require("./Controllers/user.controller");

app.use("/users", userController);

module.exports = app;