const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


//

const authRouter = require('../auth/auth-router.js');
const descriptionRouter = require('../descriptions/desc-router.js');
const authenticate = require('../auth/authenticate');


//

const server = express();

//

server.use(helmet());
server.use(cors());
server.use(express.json());

//

server.use('/api/auth', authRouter);
server.use('/api/', authenticate, descriptionRouter);

module.exports = server;
