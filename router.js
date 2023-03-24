const router = require('express').Router();
const { check } = require('express-validator');
const MessageController = require('./api/messages/MessageController');
const AuthController = require('./api/users/AuthController');
const ClientController = require('./api/clients/ClientController')
// const AuthMiddleware = require('./middleware/AuthMiddleware');
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
router.put('/clients', ClientController.update);
router.delete('/clients/:id', ClientController.delete);


module.exports = router;
