const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const target = 'http://192.168.152.1:3000';

app.get('/', (req, res) => {
  res.render('home', {
    target,
  });
});

app.listen(PORT, () => {
  console.log(`Attacker running on port ${PORT}`);
});
