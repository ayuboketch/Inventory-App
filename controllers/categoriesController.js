const pool = require("../db");

exports.getCategories = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM categories");
    res.render("categories/index", { categories: result.rows });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

exports.createCategory = async (req, res) => {
  const { name, description } = req.body;
  try {
    await pool.query(
      "INSERT INTO categories (name, description) VALUES ($1, $2)",
      [name, description]
    );
    res.redirect("/categories");
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

// Add similar CRUD operations for Items.
