const messagesModel = require("../messagesModel");

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

module.exports = { getMessageById };
