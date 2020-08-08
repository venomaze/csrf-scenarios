const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/login', (req, res) => {
  req.session.admin = true;
  res.redirect('/admin');
});

module.exports = router;
