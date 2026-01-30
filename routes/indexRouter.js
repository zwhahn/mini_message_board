const { Router } = require("express");
const messagesModel = require("../messagesModel");
const {
  getAllMessages,
  getMessageById,
} = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", getAllMessages);

indexRouter.get("/:messageId", getMessageById);

module.exports = indexRouter;
