/* eslint-disable import/extensions */
import mongoose from 'mongoose';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import router from './router.js';

const app = express();

app.use(express.json());
app.use('/api', router);
app.use(cors({
  origin: 'http://localhost:3001/',
}));

dotenv.config();

async function startApp() {
  try {
    await mongoose.connect(process.env.DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
    app.listen(process.env.DB_PORT, () => console.log(`SERVER STARTED: ${process.env.DB_PORT}`));
  } catch (e) {
    console.log(e);
  }
}

startApp();
