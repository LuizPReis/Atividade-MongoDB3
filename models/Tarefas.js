const mongoose = require('mongoose');


const Tarefas = mongoose.model('Tarefas', {
    tarefa1: String,
    tarefa2: String,
    conclusaodaTarefa: Boolean,
    responsalvelTarefa: String
});

module.exports = Tarefas;