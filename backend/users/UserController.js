import UserService from './UserService.js';

class UserController {
  async create(req, res) {
    try {
      const message = await UserService.create(req.body);
      res.json(message);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const messages = await UserService.getAll();
      return res.json(messages);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getById(req, res) {
    try {
      const message = await UserService.getById(req.params.id);
      return res.json(message);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async update(req, res) {
    try {
      const updatedMessage = await UserService.update(req.body);
      return res.json(updatedMessage);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const message = await UserService.delete(id);
      res.status(200).json(message);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
export default new UserController();
