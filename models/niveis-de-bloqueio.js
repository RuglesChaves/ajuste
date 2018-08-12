'use strict';

var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var schema = new mongoose.Schema({
    nome: { type: String, uppercase: true },
    nivel: String,
    feriado: String,
   // equipamento: [{ type: String, uppercase: true }],
    semana: [{ type: String, uppercase: true }],
    ip: [{ type: String, uppercase: true }]
});
schema.plugin(mongoosePaginate);

var Model = mongoose.model('niveis-de-bloqueio', schema);

module.exports = Model;
