const { Router } = require("express");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", { message: "Message Indeכ" });
});

module.exports = indexRouter;
