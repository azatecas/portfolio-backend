const express = require('express');
const helmet = require('helmet');
const CORS = require('cors');

//Router
const projectsRouter = require('../projects/projects-router');
const skillsRouter = require('../skills/skills-router');


const server = express();


//teaching servers to use dependancies
server.use(helmet());
server.use(express.json());
server.use(CORS());
server.use(session(sessionConfig));

server.use('/api/skills', skillsRouter);
server.use('/api/projects',projectsRouter);

server.get('/', (req, res) => {
    res.json({serverStatus: "🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️🏃‍♂️"});
})

module.exports = server;