const express = require('express');
const router = express.Router();
const Usuario = require('../models/usuario');

router.post('/', async (req, res) => {
    const {nome, senha} = req.body;
    const usuario = {nome, senha};
    try {
        await Usuario.create(usuario);
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

router.get('/', async (req, res) => {
    try {
        const usuario = await Usuario.find();
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const usuario = await Usuario.findOne({ _id: id });
        res.status(200).json(usuario);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

module.exports = router;
