const users = require('../models/userModel');

exports.login = (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  user ? res.json(user) : res.status(401).json({ message: 'Credenciales inválidas' });
};
