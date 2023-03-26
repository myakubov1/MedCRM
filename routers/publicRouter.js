const publicRouter = require('express').Router();
const { check } = require('express-validator');
const AuthController = require('../api/users/AuthController');
const RoleMiddleware = require('../middleware/RoleMiddleware');

// users
publicRouter.post('/registration', [
  check('username', 'Имя пользователя не может быть пустым').notEmpty(),
  check('password', 'Пароль должен быть больше 4 и меньше 20 символов').isLength({ min: 4, max: 20 }),
], AuthController.registration);
publicRouter.post('/login', AuthController.login);
publicRouter.get('/users', RoleMiddleware(['ADMIN']), AuthController.getUsers);

module.exports = publicRouter;
