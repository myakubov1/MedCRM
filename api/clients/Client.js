const { Schema, model } = require('mongoose');

const Client = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  patronymic: { type: String, required: false },
  gender: { type: String, required: true },
  age: { type: Number, required: true },
  address: { type: String, required: true },
  date: { type: Date, required: true, default: Date.now() },
});

module.exports = model('Client', Client);
