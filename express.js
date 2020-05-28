/* eslint-disable no-console */

const express = require('express');
const path = require('path');
require('colors');

const app = express();
const port = 3001;

// serve static assets
app.use(express.static(path.join(__dirname)));

// Catch-all route-handler to prevent 404s
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

// start listening on port
app.listen(port, () => {
  console.log(`Started Express server on port ${port}`.green);
});
