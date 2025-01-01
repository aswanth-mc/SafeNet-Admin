var express = require('express');
var router = express.Router();
const pool =require('../db');
const passport = require('passport');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('login');
});

router.post("/", passport.authenticate("local", {
  successRedirect: '/home',
  failureRedirect: '/login',
  failureFlash: true
}));

// Logout route
router.get('/logout', (req, res) => {
  req.logout((err) => { 
    if (err) {
      return next(err);
    }
    res.redirect('/login');
  });
});



module.exports = router;
