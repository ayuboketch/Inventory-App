const pool = require("./db");

const createTables = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS categories (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      );
    `);

    await pool.query(`
      CREATE TABLE IF NOT EXISTS items (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        price NUMERIC(10, 2),
        category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
      );
    `);

    console.log("Tables created successfully");
    pool.end();
  } catch (err) {
    console.error("Error creating tables:", err);
    pool.end();
  }
};

createTables();
