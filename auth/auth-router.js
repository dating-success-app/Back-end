const router = require('express').Router();
const bcrypt = require('bcryptjs');
const generateToken = require('./config/genToken');
//

const db = require('../users/users-model');

//

// const { authenticate } = require('../auth/authenticate');


router.post('/register',(req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;

  db.add(user)
    .then(saved => {
      const token = generateToken(saved);
    //   console.log(saved);
      res.status(201).json({ message: `Welcome ${saved.username}!`, token })
    })
    .catch( err => {
      res.status(500).json(err);
    })
});

router.post('/login',(req, res) => {
  let { username , password } = req.body;

  db.findBy({ username })
    .first()
    .then( user => {
      if(user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        // console.log(user);

        res.status(200).json({ message: `Welcome back ${user.username}!, I have a token`, token })
      } else {
        res.status(401).json({ message: 'Invalid Credentials ' })
      }
    })
    .catch( err => {
      res.status(500).json(err);
    })
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({ 
                    message: `Welcome ${user.username}`,
                    token,
                });

            } else {
                res.status(401).json({ message: 'Please provide valid credentials.'})
            }
        })
        .catch(err => {
            res.status(500).json(err);
        })
});

module.exports = router;
