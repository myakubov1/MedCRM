/* eslint-disable import/extensions */
const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const publicRouter = require('./routers/publicRouter.js');
const privateRouter = require('./routers/privateRouter.js');
const AuthMiddleware = require('./middleware/AuthMiddleware');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/public', publicRouter);
app.use('/private', AuthMiddleware, privateRouter);

dotenv.config();

async function startApp() {
  try {
    await mongoose.connect(process.env.DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
    app.listen(process.env.PORT, () => console.log(`SERVER STARTED: ${process.env.PORT}`));
  } catch (e) {
    console.log(e);
  }
}

startApp();
