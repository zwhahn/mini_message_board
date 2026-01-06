const { Router } = require("express");
const messagesModel = require("../messagesModel");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Message Board",
    messages: messagesModel.getMessages(),
  });
  console.log(messagesModel.getMessages());
});

module.exports = indexRouter;
