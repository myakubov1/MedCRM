const router = require('express').Router();
const { check } = require('express-validator');
const MessageController = require('./api/messages/MessageController');
const AuthController = require('./api/users/AuthController');
const ClientController = require('./api/clients/ClientController');
const TaskController = require('./api/tasks/TaskController');
const RoleMiddleware = require('./middleware/RoleMiddleware');

// messages
router.post('/messages', MessageController.create);
router.get('/messages', MessageController.getAll);
router.get('/messages/:id', MessageController.getById);
router.put('/messages', MessageController.update);
router.delete('/messages/:id', MessageController.delete);

// users
router.post('/registration', [
  check('username', 'Имя пользователя не может быть пустым').notEmpty(),
  check('password', 'Пароль должен быть больше 4 и меньше 20 символов').isLength({ min: 4, max: 20 }),
], AuthController.registration);
router.post('/login', AuthController.login);
router.get('/users', RoleMiddleware(['ADMIN']), AuthController.getUsers);

// clients
router.post('/clients', ClientController.create);
router.get('/clients', ClientController.getAll);
router.get('/clients/:id', ClientController.getById);
router.get('/clients-p', ClientController.getWithPagination);
router.put('/clients', ClientController.update);
router.delete('/clients/:id', ClientController.delete);

// tasks
router.post('/tasks', TaskController.create);
router.get('/tasks', TaskController.getAll);
router.get('/tasks/:id', TaskController.getById);
router.put('/tasks', TaskController.update);
router.delete('/tasks/:id', TaskController.delete);

module.exports = router;
