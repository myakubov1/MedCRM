const adminRouter = require('express').Router();
const MessageController = require('../api/messages/MessageController');

adminRouter.get('/messages', MessageController.getAll);
module.exports = adminRouter;
