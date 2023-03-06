import User from './User.js';

class UserService {
  async create(user) {
    const createdUser = await User.create(user);
    return createdUser;
  }

  async getAll() {
    const user = await User.find();
    return user;
  }

  async getById(id) {
    const user = await User.findById(id);
    return user;
  }

  async update(user) {
    const updatedUser = await User.findByIdAndUpdate(user._id, user, { new: true });
    return updatedUser;
  }

  async delete(id) {
    const user = await User.findByIdAndDelete(id);
    return user;
  }
}
export default new UserService();
