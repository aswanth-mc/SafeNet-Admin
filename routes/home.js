var express = require("express");
var router = express.Router();
const pool = require("../db");
const isAuthenticated = require("../authentication"); // Middleware

// GET home page (protected)
router.get('/', isAuthenticated, async (req, res) => {
  try {
    const { sortBy = "district", order = "ASC" } = req.query;

    const validColumns = ["name", "designation", "district"];
    const validOrder = ["ASC", "DESC"];

    if (!validColumns.includes(sortBy) || !validOrder.includes(order)) {
      return res.status(400).send("Invalid sorting parameters.");
    }

    const query = `SELECT name, designation, district FROM autho ORDER BY ${sortBy} ${order}`;
    const { rows } = await pool.query(query);

    res.render("home", { data: rows, user: req.user });
  } catch (error) {
    console.error("Error fetching sorted data:", error.message);
    res.status(500).send("An error occurred while fetching data.");
  }
});

module.exports = router;
