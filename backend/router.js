import { Router } from 'express';
import { check } from 'express-validator';
import cors from 'cors';
import MessageController from './messages/MessageController.js';
import AuthController from './users/AuthController.js';
import AuthMiddleware from './middleware/authMiddleware.js';
import RoleMiddleware from './middleware/roleMiddlewre.js';

const router = new Router();

// messages
router.post('/messages', MessageController.create);
router.get('/messages', cors(), MessageController.getAll);
router.get('/messages/:id', MessageController.getById);
router.put('/messages', MessageController.update);
router.delete('/messages/:id', MessageController.delete);

// users
router.post('/registration', [
  check('username', 'Имя пользователя не может быть пустым').notEmpty(),
  check('password', 'Пароль должен быть больше 4 и меньше 20 символов').isLength({ min: 4, max: 20 }),
], AuthController.registration);
router.post('/login', AuthController.login);
router.get('/users', RoleMiddleware.getPayload(['ADMIN']), AuthController.getUsers);

export default router;
