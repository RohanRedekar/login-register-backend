const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const userController = require("./Controllers/user.controller");
const { register, login } = require("./Controllers/auth.controller");

app.use("/users", userController);
app.use("/register", register);
app.use("/login", login);

module.exports = app;
