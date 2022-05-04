const express = require('express');
const cors= require("cors")

// Routers
const { usersRouter } = require('./routes/users.routes');
const { transfersRouter } = require('./routes/transfers.routes');

// Init express app
const app = express();

//Enable cors
app.use(cors())

// Enable incoming JSON data
app.use(express.json());

// Endpoints

app.use('/api/v1/users', usersRouter);
app.use('/api/v1/transfers', transfersRouter);
// http://localhost:4000/api/v1/users

module.exports = { app };
