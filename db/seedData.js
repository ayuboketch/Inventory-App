const pool = require("./db");

const seedData = async () => {
  try {
    await pool.query(`
      INSERT INTO categories (name)
      VALUES ('Electronics'), ('Furniture'), ('Toys');
    `);

    await pool.query(`
      INSERT INTO items (name, description, price, category_id)
      VALUES 
        ('Laptop', 'A high-performance laptop', 999.99, 1),
        ('Table', 'A sturdy wooden table', 199.99, 2),
        ('Action Figure', 'A collectible action figure', 29.99, 3);
    `);

    console.log("Data seeded successfully");
    pool.end();
  } catch (err) {
    console.error("Error seeding data:", err);
    pool.end();
  }
};

seedData();
