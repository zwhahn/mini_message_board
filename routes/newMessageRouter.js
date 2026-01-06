const { Router } = require("express");
const messagesModel = require("../messagesModel");

const newMessageRouter = Router();

newMessageRouter.get("/", (req, res) => {
  res.render("form", {});
});

newMessageRouter.post("/", (req, res) => {
  const author = req.body.author;
  const message = req.body.message;

  messagesModel.addMessage(message, author);

  res.redirect("/");
});

module.exports = newMessageRouter;
