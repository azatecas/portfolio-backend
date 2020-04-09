const express = require('express');
const helmet = require('helmet');
const CORS = require('cors');

const restricted = require('../auth/restrictedMiddleware');

//rate limiter middleware
const apiLimiter = require('../middleware/rateLimiter');

//Routers
const projectsRouter = require('../projects/projects-router');
const skillsRouter = require('../skills/skills-router');
const userRouter = require('../users/users-router');
const authRouter = require('../auth/authRouter');

const server = express();

//teaching servers to use dependancies
server.use(helmet());
server.use(express.json());
server.use(CORS());
server.use(apiLimiter);

server.use('/api/skills', skillsRouter);
server.use('/api/projects', projectsRouter);
server.use('/api/users', restricted, userRouter);
server.use('/api/auth', authRouter);

server.get('/', (req, res) => {
    res.json({serverStatus: "Running🏃‍♂️"});
})

module.exports = server;