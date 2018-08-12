'use strict';

var helper = require('../config/helper');
var config = require('../config');

// require default controller
var controller = require('../controllers/controller');

// creating a new controller object
var Controller = new controller({
	route			: 'niveis-de-bloqueio',
	menu			: 'Cadastros',
	pageName		: 'Nivel de Bloqueio',
	pageNamePlural	: 'Niveis de Bloqueio',
	model 			: 'niveis-de-bloqueio'
});

// expose this inherited controller
module.exports = Controller;