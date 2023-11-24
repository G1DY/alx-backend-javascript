const express = require('express');

const HOST = 'localhost';
const PORT = 7865;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system',);
});

app.get('/cart/:id(\\d+)', (req, res) => {
  const cartId = req.params.id;

  if (/^\d+$/.test(cartId)) {
    res.send(`Payment methods for cart ${cartId}`);
  }
  else {
    res.status(404).send('Invalid cart ID');
  }
});

app.post('/login', (req, res) => {
  const { userName } = req.body;

  if (userName) {
    res.send(`Welcome ${userName}`);
  } else {
    res.status(400).send('Bad Request: Please provide a valid username');
  }
});

app.listen(PORT, HOST, () => {
  console.log(`API available on ${HOST} port ${PORT}`);
});

module.exports = app;
