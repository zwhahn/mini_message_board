const { Router } = require("express");
const {
  getForm,
  createMessage,
} = require("../controllers/newMessageController");

const newMessageRouter = Router();

newMessageRouter.get("/", getForm);

newMessageRouter.post("/", createMessage);

module.exports = newMessageRouter;
