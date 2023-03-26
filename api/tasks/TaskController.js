const Task = require('./Task');

class TaskController {
  async create(req, res) {
    try {
      const task = await Task.create(req.body);
      res.json(task);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getAll(req, res) {
    console.log('getAll Tasks');
    const { user } = req.query;
    try {
      const task = await Task.find({ user });
      return res.json(task);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async getById(req, res) {
    console.log('getById');
    try {
      const { id } = req.params;
      const task = await Task.findById(id);
      return res.json(task);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async update(req, res) {
    console.log('update');
    try {
      const updatedTask = await Task.findByIdAndUpdate(req.body._id, req.body, { new: true });
      return res.json(updatedTask);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }

  async delete(req, res) {
    console.log('delete');
    try {
      const { id } = req.params;
      const message = await Task.findByIdAndDelete(id);
      res.status(200).json(message);
    } catch (e) {
      res.status(500).json(e.message);
    }
  }
}
module.exports = new TaskController();
