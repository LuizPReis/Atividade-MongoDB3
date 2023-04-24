const express = require('express');
const router = express.Router();
const Tarefas = require('../models/Tarefas');

router.post('/', async (req, res) => {
    const {tarefa1, tarefa2, conclusaodaTarefa, responsavelTarefa} = req.body;
    const tarefas = {tarefa1, tarefa2, conclusaodaTarefa, responsavelTarefa};
    try {
        await Tarefas.create(tarefas);
        res.status(201).json(tarefas);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

router.get('/', async (req, res) => {
    try {
        const tarefas = await Tarefas.find();
        res.status(200).json(tarefas);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});
router.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const tarefas = await Tarefas.findOne({ _id: id });
        res.status(200).json(tarefas);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

router.get('/', async (req, res) => {
    try {
        const tarefas = await Tarefas.find();
        res.status(200).json(tarefas);
    } catch (error) {
        res.status(500).json({ erro: error });
    }
});

router.get('/:id', async (req, res) => {
    try {
    const tarefas = await Tarefas.findOne({ _id: req.params.id });
    if (!tarefas) {
    res.status(422).json({ mensagem: "Usuario não encontrado" });
    return
    }
    res.status(200).json(tarefas);
    } catch (error) {
    res.status(500).json({ error: error });
    }
    });

    router.delete('/:id', async (req, res) => {
        try {
        const id = req.params.id;
        const tarefas = await Tarefas.findOne({ _id: id });
        if (!tarefas) {
        res.status(422).json({ mensagem: "Usuario não encontrado" });
        return;
        }
        await Tarefas.deleteOne({ _id: id });
        res.status(200).json({ mensagem: "Excluído com sucesso!" });
        } catch (error) {
        res.status(500).json({ error: error });
        }
        });

    router.patch('/:id', async (req, res) => {
            try {
            const id = req.params.id;
            const {conclusaodaTarefa, responsavelTarefa} = req.body;
            const usu = {
            conclusaodaTarefa, responsavelTarefa
            }
            const updateUsu = await Tarefas.updateOne({ _id: id }, usu);
            if (updateUsu.matchedCount === 0) {
            res.status(422).json({ mensagem: "Usuario não encontrado" });
            return
            }
            res.status(200).json(usu);
            } catch (error) {
            res.status(500).json({ error: error });
            }
            });

        router.get('/:id', async (req, res) => {
                try {
                const tarefas = await Tarefas.findOne({ _id: req.params.id });
                if (!tarefas) {
                res.status(422).json({ mensagem: "Usuario não encontrado" });
                return
                }
                res.status(200).json(tarefas);
                } catch (error) {
                res.status(500).json({ error: error });
                }
                });

module.exports = router;