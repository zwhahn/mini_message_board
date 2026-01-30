const { Router } = require("express");

const {
  getAllMessages,
  getMessageById,
  deleteMessage,
} = require("../controllers/indexController");

const indexRouter = Router();

indexRouter.get("/", getAllMessages);

indexRouter.get("/:messageId", getMessageById);

indexRouter.get("/delete/:messageId", deleteMessage);

module.exports = indexRouter;
