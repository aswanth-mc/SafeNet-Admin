var express = require('express');
var router = express.Router();
const pool =require('../db')

router.get('/', async function(req, res) {
  try {
    const query = `SELECT name, email, phone_number, office_address, designation, department, employee_id, id_proof, photo FROM authority`;
    const { rows } = await pool.query(query);

    res.render('autho_verify', { data: rows });
  } catch (error) {
    console.error('Error fetching sorted data:', error.message);
    res.status(500).send('An error occurred while fetching data.');
  }
  });
  router.post('/verify/approve/:employee_id', async (req, res) => {
    const employee_id = req.params.employee_id; 
  
    try {
      
      const checkQuery = 'SELECT * FROM authority WHERE employee_id = $7';
      const checkResult = await pool.query(checkQuery, [employee_id]);
  
      if (checkResult.rowCount === 0) {
        return res.status(404).send('Authority record not found.');
      }
  
      
      const updateQuery = 'UPDATE authority SET verified = true WHERE employee_id = $7';
      await pool.query(updateQuery, [employee_id]);
  
      res.status(200).send('Authority approved successfully.');
    } catch (error) {
      console.error('Error approving authority:', error.message);
      res.status(500).send('An error occurred while approving authority.');
    }
  });
  module.exports = router;