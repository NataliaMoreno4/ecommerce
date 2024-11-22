const products = require('../models/productModel');

exports.getProducts = (req, res) => {
  res.json(products);
};

exports.getProductById = (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  product ? res.json(product) : res.status(404).json({ message: 'Producto no encontrado' });
};
