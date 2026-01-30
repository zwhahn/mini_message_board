const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const pool = require("./pool");

const SQL = `
DROP TABLE IF EXISTS messages;

CREATE TABLE messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  author VARCHAR ( 255 ),
  content TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (author, content) VALUES
('Amando', 'Hi there!'),
('Charles', 'Hello World!')
`;

async function main() {
  console.log("seeding...");

  if (!process.env.DATABASE_PUBLIC_URL) {
    console.error("FATAL ERROR: DATABASE_PUBLIC_URL is not defined!");
    return;
  }
  console.log("Database URL detected. Attempting connection...");
  await pool.query(SQL);
  await pool.end();
  console.log("done");
}

main();
