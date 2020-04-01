const express = require('express');
const helmet = require('helmet');
const CORS = require('cors');

//rate limiter middleware
const apiLimiter = require('../middleware/rateLimiter');

//Routers
const projectsRouter = require('../projects/projects-router');
const skillsRouter = require('../skills/skills-router');


const server = express();


//teaching servers to use dependancies
server.use(helmet());
server.use(express.json());
server.use(CORS());
server.use(apiLimiter);

server.use('/api/skills', skillsRouter);
server.use('/api/projects', projectsRouter);

server.get('/', (req, res) => {
    res.json({serverStatus: "Running🏃‍♂️"});
})

module.exports = server;