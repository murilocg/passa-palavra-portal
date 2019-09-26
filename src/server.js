require('console-stamp')(console, '[HH:MM:ss.l]');

const fs = require('fs');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const { routes } = require('./api');
const server = express();
 
server.set('port', (process.env.PORT || 3000));

server.use(cors());
server.use('/api/routes', routes);

server.listen(server.get('port'), function () {
	console.log('Node server is running on port', server.get('port'));
});