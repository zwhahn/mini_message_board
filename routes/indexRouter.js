const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => res.send("Messages Index"));

module.exports = indexRouter;
