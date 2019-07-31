const jwt = require('jsonwebtoken');
const jwtKey = require('./config/secrets');

function authenticate(req, res, next) {
    const token = req.get('Authorization');
    // console.log(req, '-- request')

    if(token) {
        jwt.verify(token, jwtKey, (err, decoded) => {
            if(err) return res.status(401).json(err);

            req.decoded = decoded;

            next();
        });
    } else {
        return res.status(401).json({ error: 'No token provided' })
    };
};

module.exports = authenticate;