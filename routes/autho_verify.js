var express = require('express');
var router = express.Router();
const pool =require('../db')

router.get('/', async function(req, res) {
  try {
    const query = `SELECT id,name, email, phone_number, office_address, designation, department, employee_id, id_proof, photo FROM authority`;
    const { rows } = await pool.query(query);

    res.render('autho_verify', { data: rows });
  } catch (error) {
    console.error('Error fetching sorted data:', error.message);
    res.status(500).send('An error occurred while fetching data.');
  }
  });
  
  module.exports = router;