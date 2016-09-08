'use strict';
const express = require('express');
const app = express();
let port = 4040 || process.env.PORT;

app.get('/', (req, res) => {
  res.send('This is our landing page');
});

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
