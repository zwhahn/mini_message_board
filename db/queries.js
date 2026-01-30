const pool = require("../db/pool");

async function getAllMessages() {
  const { rows } = await pool.query("SELECT * FROM messages");
  return rows;
}

async function getMessageById(id) {
  const { rows } = await pool.query("SELECT * FROM messages WHERE id = $1", [
    id,
  ]);
  return rows[0];
}

async function createMessage(username, content) {
  await pool.query("INSERT INTO messages (author, content) VALUES ($1, $2)", [
    username,
    content,
  ]);
}

async function deleteMessage(id) {
  await pool.query("DELETE FROM messages WHERE id = $1", [id]);
}

module.exports = {
  getAllMessages,
  getMessageById,
  createMessage,
  deleteMessage,
};
