const router = require('express').Router();
const { check } = require('express-validator');
const cors = require('cors');
const MessageController = require('./messages/MessageController');
const AuthController = require('./users/AuthController');
const AuthMiddleware = require('./middleware/AuthMiddleware');
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

module.exports = router;
