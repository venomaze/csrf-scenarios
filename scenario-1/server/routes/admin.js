const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  const admin = req.app.get('admin');

  res.render('dashboard', {
    email: admin.email,
  });
});

router.get('/form', (req, res) => {
  const admin = req.app.get('admin');

  res.render('form', {
    email: admin.email,
  });
});

router.get('/change', (req, res) => {
  const admin = req.app.get('admin');
  const newEmail = req.query.email;

  admin.email = newEmail;

  res.redirect('/admin');
});

router.get('/logout', (req, res) => {
  delete req.session.admin;
  res.redirect('/');
});

module.exports = router;
