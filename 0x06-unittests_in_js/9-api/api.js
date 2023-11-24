const express = require('express');

const HOST = 'localhost';
const PORT = 7865;

const app = express();

app.get('/', (req, res) => {
  res.send('Welcome to the payment system',);
});

app.get('/cart/:id(\\d+)', (res, req) => {
  const id = req.params.id;

  res.send(`Payment methods for cart ${id}`);
});

app.listen(PORT, HOST, () => {
  console.log(`API available on ${HOST} port ${PORT}`);
});

module.exports = app;
