const { User } = require('../models/user.model');
const { Transfer } = require('../models/transfer.model');

const createUserAccount = async (req, res) => {
  try {
    const { name, accountNumber, password, amount } = req.body;
    const newUserAccount = await User.create({
      name,
      accountNumber,
      password,
      amount,
    });
    res.status(201).json({ newUserAccount });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { accountNumber, password } = req.body;
    const newUserAccount = await User.findOne({
      where: { accountNumber, password },
    });
    res.status(200).json({ newUserAccount });
  } catch (error) {
    console.log(error);
  }
};

const getUserTransfer = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await Transfer.findAll({ where: { senderUserId: id } });

    res.status(200).json({ user });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createUserAccount, login, getUserTransfer };
