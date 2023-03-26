const privateRouter = require('express').Router();
const TaskController = require('../api/tasks/TaskController');
const MessageController = require('../api/messages/MessageController');
const ClientController = require('../api/clients/ClientController');

// messages
privateRouter.post('/messages', MessageController.create);
privateRouter.get('/messages', MessageController.getAll);
privateRouter.get('/messages/:id', MessageController.getById);
privateRouter.put('/messages', MessageController.update);
privateRouter.delete('/messages/:id', MessageController.delete);

// clients
privateRouter.post('/clients', ClientController.create);
privateRouter.get('/clients', ClientController.getAll);
privateRouter.get('/clients/:id', ClientController.getById);
privateRouter.get('/clients-p', ClientController.getWithPagination);
privateRouter.put('/clients', ClientController.update);
privateRouter.delete('/clients/:id', ClientController.delete);

// tasks
privateRouter.post('/tasks', TaskController.create);
privateRouter.get('/tasks', TaskController.getAll);
privateRouter.get('/tasks/:id', TaskController.getById);
privateRouter.put('/tasks', TaskController.update);
privateRouter.delete('/tasks/:id', TaskController.delete);

module.exports = privateRouter;
