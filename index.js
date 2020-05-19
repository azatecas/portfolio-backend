require('dotenv').config();

const server = require('./api/server.js');

const port = process.env.PORT;
server.listen(port, () => console.log(`\n** ${process.env.HASHING_ROUNDS} server up on port ${port} **\n`));