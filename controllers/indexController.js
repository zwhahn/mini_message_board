const db = require("../db/queries");

async function getAllMessages(req, res) {
  try {
    const messages = await db.getAllMessages();
    res.render("index", {
      title: "Mini Message Board",
      messages: messages,
    });
  } catch (err) {
    console.error("Error fetching messages: ", err);
    res.status(500).send("Error loading messages");
  }
}

async function getMessageById(req, res) {
  const { messageId } = req.params;

  console.log(`messageId: ${messageId}`);

  const message = await db.getMessageById(Number(messageId));

  if (!message) {
    res.status(404).send("Message not found");
    return;
  }

  res.render("messageDetails", {
    user: message.author,
    text: message.content,
    added: message.created_at,
    messageId: message.id,
  });
}

async function deleteMessage(req, res) {
  const { messageId } = req.params;
  await db.deleteMessage(Number(messageId));
  res.redirect("/");
}

module.exports = { getAllMessages, getMessageById, deleteMessage };
