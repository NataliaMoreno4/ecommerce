const orders = require('../models/orderModel');

exports.createOrder = (req, res) => {
  const order = { id: orders.length + 1, ...req.body };
  orders.push(order);
  res.status(201).json(order);
};
