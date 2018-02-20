const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');

const config = require('../config.js');

const app = express();
const PORT = config.port;

app.listen(PORT, err => {
  if (err) {
    console.log(`error starting server: ${err}`)
  } else {
    console.log(`app listening on port ${PORT}`);
  }
});