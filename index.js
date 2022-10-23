require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());

const authRouter = require('./routes/auth.js');

app.use('/auth', authRouter);

app.listen(8000, () => {
     console.log('Server has Started');
});