var express = require('express');
var router = express.Router();

let goals = [
    {
        id: 1,
        title: 'Goal 1',
        description: 'Description for Goal 1'
    },
    {
        id: 2,
        title: 'Goal 2',
        description: 'Description for Goal 2'
    },
    {
        id: 3,
        title: 'Goal 3',
        description: 'Description for Goal 3'
    }
];

// Obtener todos los objetivos
router.get('/getGoals', function(req, res, next) {
    res.json(goals);
});

// Eliminar un objetivo por ID
router.delete('/deleteGoal/:id', function(req, res, next) {
    const goalId = parseInt(req.params.id);
    goals = goals.filter(goal => goal.id !== goalId);
    res.json({ message: 'Goal deleted successfully' });
});

// Agregar un nuevo objetivo
router.post('/addGoal', function(req, res, next) {
    const newGoal = {
        id: goals.length + 1,
        title: req.body.title,
        description: req.body.description
    };
    goals.push(newGoal);
    res.json({ message: 'Goal added successfully', goal: newGoal });
});

module.exports = router;