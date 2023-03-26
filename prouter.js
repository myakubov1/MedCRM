const prouter = require('express').Router();
const TaskController = require('./api/tasks/TaskController');

// tasks
prouter.post('/tasks', TaskController.create);
prouter.get('/tasks', TaskController.getAll);
prouter.get('/tasks/:id', TaskController.getById);
prouter.get('/tasks/:user', TaskController.getByUser);
prouter.put('/tasks', TaskController.update);
prouter.delete('/tasks/:id', TaskController.delete);

module.exports = prouter;
