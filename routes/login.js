var express = require('express');
var router = express.Router();
const pool =require('../db')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login');
});

router.post("/login", async (req, res) => {
  try {
      const { username, password } = req.body; 

      
      const query = "SELECT * FROM admin WHERE username = $1 AND password = $2"; 
      const values = [username, password];

      const result = await pool.query(query, values);

      if (result.rows.length > 0) {

          console.log("Login successful!");
          res.redirect("/home"); 
      } else {
         
          res.status(401).send("Invalid username or password. Please try again.");
      }0
  } catch (error) {
      console.error("Error during login:", error.message);
      res.status(500).send("Internal server error");
  }
});

module.exports = router;
