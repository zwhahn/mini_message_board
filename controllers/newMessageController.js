const db = require("../db/queries");

function getForm(req, res) {
  res.render("form");
}

function createMessage(req, res) {
  const author = req.body.author;
  const message = req.body.message;

  db.createMessage(author, message);

  res.redirect("/");
}

module.exports = { getForm, createMessage };
