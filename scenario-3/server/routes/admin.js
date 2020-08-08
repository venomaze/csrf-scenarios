const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  const csrfToken = await req.getToken();

  res.render('dashboard', {
    token: csrfToken,
  });
});

router.post('/delete', (req, res) => {
  const admin = req.app.get('admin');
  const isTokenValid = req.isTokenValid();

  if (isTokenValid) {
    admin.active = false;
    delete req.session.admin;

    return res.redirect('/');
  }

  return res.send('CSRF Token is not valid!');
});

router.get('/logout', (req, res) => {
  delete req.session.admin;
  res.redirect('/');
});

module.exports = router;
