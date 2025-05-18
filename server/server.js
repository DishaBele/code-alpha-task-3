const express = require('express');
const cors = require('cors');
const session = require('express-session');
const app = express();
const PORT = 3000;

app.use(cors({
  origin: 'http://127.0.0.1:5500',
  credentials: true
}));

app.use(express.json());

app.use(session({
  secret: 'my-secret',
  resave: false,
  saveUninitialized: true
}));

app.post('/cart', (req, res) => {
  const { title, price } = req.body;
  if (!req.session.cart) req.session.cart = [];
  req.session.cart.push({ title, price });
  res.json({ success: true, message: 'Item added to cart!' });
});

app.get('/cart', (req, res) => {
  res.json(req.session.cart || []);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
