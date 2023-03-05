import { Router } from 'express';
import MessageController from './messages/MessageController.js';

const router = new Router();

// messages
router.post('/messages', MessageController.create);
router.get('/messages', MessageController.getAll);
router.get('/messages/:id', MessageController.getById);
router.put('/messages', MessageController.update);
router.delete('/messages/:id', MessageController.delete);

// users
export default router;
