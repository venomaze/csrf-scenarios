const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('home');
});

router.get('/login', (req, res) => {
  const admin = req.app.get('admin');

  if (admin.active) {
    req.session.admin = true;
    return res.redirect('/admin');
  }

  return res.send('There is no account!');
});

router.get('/reset', (req, res) => {
  const admin = req.app.get('admin');
  admin.active = true;
  res.redirect('/');
});

module.exports = router;
