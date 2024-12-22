var express = require('express');
var router = express.Router();
const pool =require('../db');

/* GET users listing. */
router.get('/', async function(req, res) {
  try {
    const{ rows }=await pool.query('select name,designation from autho');
    res.render('home',{data:rows});
  } catch (error) {
    console.error(error);
    res.status(500).send('error fectching')
  }
});

module.exports = router;
