const { Routes } = require('express');
const bodyParser = require('body-parser');
const routes = Routes();

routes.use(bodyParser.json({limit: '10mb'}));

routes.use('../app', app);
routes.use('./quizRouter');

exports.routes = routes; 