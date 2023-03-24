const Client = require('./Client');

class ClientController {
  async create(req, res) {
    try {
      const client = await Client.create(req.body);
      res.json(client);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const clients = await Client.find();
      return res.status(200).json(clients);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const client = await Client.findById(id);
      return res.json(client);
    } catch (e) {
      res.status(500).json(e.client);
    }
  }

  async update(req, res) {
    try {
      const updatedClient = await Client.findByIdAndUpdate(req.body._id, req.body, { new: true });
      return res.json(updatedClient);
    } catch (e) {
      res.status(500).json(e.client);
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const client = await Client.findByIdAndDelete(id);
      res.status(200).json(client);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
module.exports = new ClientController();
