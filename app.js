/* eslint-disable import/extensions */
const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const router = require('./router.js');


const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', router);

dotenv.config();

async function startApp() {
  try {
    const port = process.env.PORT || 3001;
    await mongoose.connect(process.env.DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
    app.listen(port, () => console.log(`SERVER STARTED: ${port}`));
  } catch (e) {
    console.log(e);
  }
}

startApp();
