const messagesModel = require("../messagesModel");

function getForm(req, res) {
  res.render("form");
}

function createMessage(req, res) {
  const author = req.body.author;
  const message = req.body.message;

  messagesModel.addMessage(message, author);

  res.redirect("/");
}

module.exports = { getForm, createMessage };
