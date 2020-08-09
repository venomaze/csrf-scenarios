const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const ip = require('ip');
const CSRFGuard = require('csrf-guard');

const isAdmin = require('./middlewares/admin');
const adminRouter = require('./routes/admin');
const indexRouter = require('./routes');

const app = express();
const IP = ip.address();
const PORT = 3000;

const admin = { active: true };

app.use(
  session({
    secret: 'secret_key',
    cookie: {
      sameSite: 'lax',
      httpOnly: true,
    },
  })
);
app.use(bodyParser.urlencoded({ extended: false }));

app.use(
  new CSRFGuard({
    secret: 'secret_key',
  })
);

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('admin', admin);

app.use('/', indexRouter);
app.use('/admin', isAdmin, adminRouter);

/**
 * XSS Vulnerability
 */

app.get('/name', (req, res) => {
  res.render('name');
});

app.get('/hello', (req, res) => {
  const { name } = req.query;

  res.render('hello', {
    name,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://${IP}:${PORT}`);
});
