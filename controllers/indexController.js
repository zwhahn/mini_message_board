const messagesModel = require("../messagesModel");

async function getAllMessages(req, res) {
  res.render("index", {
    title: "Mini Message Board",
    messages: messagesModel.getMessages(),
  });
  console.log(messagesModel.getMessages());
}

async function getMessageById(req, res) {
  const { messageId } = req.params;

  console.log(`messageId: ${messageId}`);

  const message = await messagesModel.getMessageById(Number(messageId));

  if (!message) {
    res.status(404).send("Message not found");
    return;
  }

  res.render("messageDetails", {
    user: message.user,
    text: message.text,
    added: message.added,
  });
}

module.exports = { getAllMessages, getMessageById };
