const express = require('express');

// Controller
const { insertAmount } = require('../controllers/transfer.controller');

const router = express.Router();

router.post('/', insertAmount);

module.exports = { transfersRouter: router };
