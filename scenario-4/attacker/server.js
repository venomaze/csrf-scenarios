const express = require('express');
const path = require('path');
const ip = require('ip');

const app = express();
const PORT = 3001;
const IP = ip.address();
const target = `http://${IP}:3000`;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  res.render('home', {
    target,
  });
});

app.listen(PORT, () => {
  console.log(`Attacker running on port ${PORT}`);
});
