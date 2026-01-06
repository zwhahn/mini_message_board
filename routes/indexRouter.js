const { Router } = require("express");
const messagesModel = require("../messagesModel");
const { getMessageById } = require("../controllers/newMessageController");

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Message Board",
    messages: messagesModel.getMessages(),
  });
  console.log(messagesModel.getMessages());
});

indexRouter.get("/:messageId", getMessageById);

module.exports = indexRouter;
