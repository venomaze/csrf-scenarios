const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');
const ip = require('ip');

const isAdmin = require('./middlewares/admin');
const adminRouter = require('./routes/admin');
const indexRouter = require('./routes');

const app = express();
const IP = ip.address();
const PORT = 3000;

const admin = {
  email: 'admin@nosecurity.com',
  active: true,
};

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

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('admin', admin);

app.use('/', indexRouter);
app.use('/admin', isAdmin, adminRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://${IP}:${PORT}`);
});
