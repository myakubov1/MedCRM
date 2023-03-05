import MessageService from './MessageService.js';

class MessageController {
  async create(req, res) {
    try {
      const message = await MessageService.create(req.body);
      res.json(message);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const messages = await MessageService.getAll();
      return res.json(messages);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getById(req, res) {
    try {
      const message = await MessageService.getById(req.params.id);
      return res.json(message);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async update(req, res) {
    try {
      const updatedMessage = await MessageService.update(req.body);
      return res.json(updatedMessage);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const message = await MessageService.delete(id);
      res.status(200).json(message);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
export default new MessageController();
