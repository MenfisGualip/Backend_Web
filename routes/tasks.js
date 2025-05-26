var express = require('express');
var router = express.Router();  // <--- definir router correctamente
var db = require('../Config/db');  // <--- asegúrate que la carpeta sea 'config' en minúsculas

// Obtener todas las tareas
router.get('/getTasks', function(req, res, next) {
    const query = 'SELECT * FROM tasks';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Error al obtener las tareas', error: err });
        }
        res.status(200).json(results);
    });
});

// Eliminar una tarea por ID
router.delete('/deleteTask/:id', function(req, res, next) {
    const taskId = parseInt(req.params.id, 10);
    if (isNaN(taskId)) {
        return res.status(400).json({ message: 'ID inválido' });
    }

    const query = 'DELETE FROM tasks WHERE id = ?';

    db.query(query, [taskId], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al eliminar la tarea', error: err });
        }
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Tarea no encontrada' });
        }
        res.status(200).json({ message: 'Tarea eliminada exitosamente' });
    });
});

// Agregar una nueva tarea
router.post('/addTask', function(req, res, next) {
    const { name, description } = req.body;

    if (!name || !description) {
        return res.status(400).json({ message: 'Faltan campos obligatorios: name y description' });
    }

    const query = 'INSERT INTO tasks (name, description) VALUES (?, ?)';

    db.query(query, [name, description], (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Error al agregar la tarea', error: err });
        }
        res.status(201).json({ message: 'Tarea agregada exitosamente', task: { id: result.insertId, name, description } });
    });
});

module.exports = router;
