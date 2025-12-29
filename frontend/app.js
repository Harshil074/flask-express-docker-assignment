var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Backend API
const URL = "http://backend:8000/api";

app.get('/', async function (req, res) {
  try {
    const response = await fetch(URL); // built-in fetch
    const data = await response.json();

    console.log('Backend data:', data);

    res.render('index', { data: data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
});

app.listen(3000, function () {
  console.log('Frontend running on http://localhost:3000');
});
