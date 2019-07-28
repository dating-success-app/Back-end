const jwt = require('jsonwebtoken');
const jwtKey = require('./secrets');

function generateToken(user){
    const payload = {
      subject: user.id,
      username: user.username
    };
    const options = {
      expiresIn: '5h'
    };
    return jwt.sign(payload, jwtKey, options)
};

module.exports = generateToken;