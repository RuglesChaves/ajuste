'use strict';

// require default controller
var controller = require('../controllers/controller');

// creating a new controller object
var Controller = new controller({
	route			: 'cartao',
	menu			: 'Cadastros',
	pageName		: 'Cartão',
	pageNamePlural	: 'Cartões',
	model 			: 'cartao'
});

// override default methods


// expose this inherited controller
module.exports = Controller;
