const express = require('express');
const app = express();
const mongoose = require('mongoose');
app.use(express.json());


const usuarioController = require('./controllers/usuarioController');
const tarefasController = require('./controllers/tarefasController');

app.use('/usuarios', usuarioController);
app.use('/tarefas', tarefasController);

const db_user = 'LuizP';
const db_pass = 'dw05032002';


mongoose.connect(`mongodb+srv://${db_user}:${db_pass}@cluster0.iija6tw.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
    app.listen(3000, () => {
        console.log('Conectado ao mongoDB');
        console.log('Servidor iniciado na porta 3000');
        })
})
    .catch((err) => {
    console.log(err);
});
