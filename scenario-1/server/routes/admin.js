const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const admin = req.app.get('admin');

  res.render('dashboard', {
    email: admin.email,
  });
});

router.get('/delete', (req, res) => {
  const admin = req.app.get('admin');

  admin.active = false;
  delete req.session.admin;

  res.redirect('/');
});

router.get('/logout', (req, res) => {
  delete req.session.admin;
  res.redirect('/');
});

module.exports = router;
