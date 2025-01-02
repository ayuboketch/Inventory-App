const express = require("express");
const router = express.Router();
const pool = require("../db/db");

// Get all items
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM items");
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

// Add more CRUD routes here...

module.exports = router;
