'use strict';
const express = require('express');
const app = express();
let port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('This is our landing page Welcome');
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
