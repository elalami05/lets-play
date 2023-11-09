const jwt = require('jsonwebtoken');
const User = require('../models/user');

exports.protect = (req, res, next) => {
  try {


    let token = req.headers.authorization
    if (token === undefined) {
      return res.send('401 Unauthorized')
    }
    if (!token.startsWith('Bearer')) {
      return res.send('401 Unauthorized')
    }
    token = token.split(' ')[1];
    const tokenDcode = jwt.verify(token, 'Alami');
    req.id = tokenDcode.id;

    next()
  } catch (error) {
    return res.send('')
  }
}

exports.isAdmin = (req, res, next) => {
  const id = req.id;
  const user = User.findById(id);
  if (user === undefined) {
    return res.send('not authorized to access')
  }
  if (!user.isAdmin) {
    return res.send('not authorized to access(u r a student)')
  }
  next();

}
