import Message from './Message.js';

class MessageService {
  async create(message) {
    const createdMessage = await Message.create(message);
    return createdMessage;
  }

  async getAll() {
    const messages = await Message.find();
    return messages;
  }

  async getById(id) {
    const message = await Message.findById(id);
    return message;
  }

  async update(message) {
    const updatedMessage = await Message.findByIdAndUpdate(message._id, message, { new: true });
    return updatedMessage;
  }

  async delete(id) {
    const message = await Message.findByIdAndDelete(id);
    return message;
  }
}
export default new MessageService();
