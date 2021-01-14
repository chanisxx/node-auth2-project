const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const usersRouter = require("../users/users-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());
server.use(cookieParser())

server.use(usersRouter);
server.get("/", (req, res) => {
    res.json({ api: "up" });
});

module.exports = server;