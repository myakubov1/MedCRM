const Message = require('./Message');

class MessageController {
  async create(req, res) {
    try {
      const message = await Message.create(req.body);
      res.json(message);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const messages = await Message.find();
      return res.status(200).json(messages);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const message = await Message.findById(id);
      return res.json(message);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async update(req, res) {
    try {
      const updatedMessage = await Message.findByIdAndUpdate(req.body._id, req.body, { new: true });
      return res.json(updatedMessage);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const message = await Message.findByIdAndDelete(id);
      res.status(200).json(message);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
module.exports = new MessageController();
