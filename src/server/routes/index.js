const express = require('express');
const controller = require('../controller')
const routes = express.Router();

routes.get('/phones', controller.getAllPhones);
routes.get('/phones/:id', controller.getSinglePhone);

module.exports = routes;