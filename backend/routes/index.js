const routes = require('express').Router();
const lesson1Controller = require('../controllers/professional');

routes.get('/professional', lesson1Controller.professionalRoute);

module.exports = routes;