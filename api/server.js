const express = require('express');
const helmet = require('helmet');
const CORS = require('cors');
require('dotenv').config();

//restriction middleware
const restricted = require('../auth/restrictedMiddleware');

//rate limiter middleware
const apiLimiter = require('../middleware/rateLimiter');
const authLimiter = require('../middleware/authRateLimiter');

//import Routers
const projectsRouter = require('../projects/projects-router');
const skillsRouter = require('../skills/skills-router');
const userRouter = require('../users/users-router');
const authRouter = require('../auth/authRouter');
const infoRouter = require('../info/info-router');
const contactRouter = require('../contact/contactRouter');

//declare server
const server = express();

//teaching servers to use dependancies
server.use(helmet());
server.use(express.json());
server.use(CORS());
server.use(apiLimiter);


//routes
server.use('/api/info', infoRouter);
server.use('/api/skills', skillsRouter);
server.use('/api/projects', projectsRouter);
server.use('/api/contact', contactRouter);

//Not ready jet
// server.use('/api/users', userRouter);
// server.use('/api/auth', authLimiter, authRouter);

//base route
server.get('/', (req, res) => {
    res.json({serverStatus: "Running🏃‍♂️"});
})

module.exports = server;