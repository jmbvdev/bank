const express = require('express');

// Controller
const {
  createUserAccount,
  login,
  getUserTransfer,
} = require('../controllers/user.controller');

const router = express.Router();

router.post('/signup', createUserAccount);
router.post('/login', login);

router.get('/:id/history', getUserTransfer);

module.exports = { usersRouter: router };
