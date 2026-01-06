const messages = [
  {
    id: 0,
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    id: 1,
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

var nextId = messages.length;

function getMessages() {
  return messages;
}

function addMessage(text, user) {
  messages.push({ id: nextId++, text, user, added: new Date() });
  return;
}

async function getMessageById(messageId) {
  return messages.find((message) => message.id === messageId);
}

module.exports = { getMessages, addMessage, getMessageById };
