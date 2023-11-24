const express = require('express');

const HOST = 'localhost';
const PORT = 7865;

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system',);
});

app.listen(PORT, HOST, () => {
  console.log(`API available on ${localhost} port ${PORT}`);
});

module.exports = app;
