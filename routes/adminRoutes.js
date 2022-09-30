'use strict'

var express = require('express');
var adminController = require('../controllers/AdminController');

var api = express.Router();
/**RUTAS DECLARADAS */
api.post('/registro',adminController.registro);
api.post('/decodificar',adminController.decodificar);

module.exports = api;