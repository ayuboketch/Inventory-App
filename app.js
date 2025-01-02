require("dotenv").config(); // Load environment variables
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const categoriesRouter = require("./routes/categoriesRouter");
const itemsRouter = require("./routes/itemsRouter");

const app = express();

// Middleware
app.use(morgan("dev")); // Logging HTTP requests
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Static files (if needed for front-end assets)
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/categories", categoriesRouter);
app.use("/items", itemsRouter);

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Inventory Management App!");
});

// Error handling middleware
app.use((req, res, next) => {
  res.status(404).send("Route not found");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
