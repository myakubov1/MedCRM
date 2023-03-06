/* eslint-disable no-useless-escape */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import User from './User.js';
import Role from './Role.js';

class AuthController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: 'Ошибка при регистрации', errors });
      }
      const { username, password } = req.body;
      const candidate = await User.findOne({ username });
      if (candidate) {
        return res.status(400).json({ message: 'User is already created' });
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const userRole = await Role.findOne({ value: 'USER' });
      const user = new User({ username, password: hashPassword, roles: [userRole.value] });
      await user.save();
      return res.json({ message: 'User successfuly creted' });
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: 'Registration error' });
    }
  }

  async login(req, res) {
    try {

    } catch (e) {
      console.log(e);
      res.status(500).json(e);
    }
  }

  async getUsers(req, res) {
    try {

    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new AuthController();
