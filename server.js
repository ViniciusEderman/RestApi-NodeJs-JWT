//starting the server:

const http = require('http');
const app = require('./app');
const portServer = process.env.PORT || 3000;
const server = http.createServer(app);
server.listen(portServer);
