var express = require('express');
var router = express.Router();
var db = require('../Config/db');  // Asegúrate que la carpeta sea config

// Obtener todos los objetivos
router.get('/getGoals', function(req, res, next) {
    const query = 'SELECT * FROM goals';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error al obtener las metas', error: err });
        }
        res.status(200).json(results);
    });
});

// Eliminar un objetivo por ID
router.delete('/removeGoal/:id', function(req, res, next) {
    const goalId = parseInt(req.params.id, 10);
    if (isNaN(goalId)) {
        return res.status(400).json({ message: 'ID inválido' });
    }

    const query = 'DELETE FROM goals WHERE id = ?';

    db.query(query, [goalId], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al eliminar la meta', error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Meta no encontrada' });
        }
        res.status(200).json({ message: 'Meta eliminada exitosamente' });
    });
});

// Agregar un nuevo objetivo
router.post('/addGoal', function(req, res, next) {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: 'Faltan campos obligatorios: title y description' });
    }

    const query = 'INSERT INTO goals (title, description) VALUES (?, ?)';

    db.query(query, [title, description], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al agregar la meta', error: err });
        }
        res.status(201).json({ 
            message: 'Meta agregada exitosamente', 
            goal: { id: result.insertId, title, description } 
        });
    });
});

module.exports = router;
