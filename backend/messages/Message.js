import mongoose from 'mongoose';

const Message = new mongoose.Schema({
  author: { type: String, required: true },
  content: { type: String, required: true },
  avatar: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now() },
});
export default mongoose.model('Message', Message);
