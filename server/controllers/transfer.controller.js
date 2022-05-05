const { Transfer } = require('../models/transfer.model');
const { User } = require('../models/user.model');

const insertAmount = async (req, res) => {
  try {
    const { date,amount, senderUserId, receiverUserId } = req.body;
    id = req.params;
    // primero revisar el usuario senderUserId tengo el monto suficiente

    const sender = await User.findOne({
      where: { accountNumber: senderUserId },
    });

    const receiver = await User.findOne({
      where: { accountNumber:receiverUserId },
    });
    if (!receiver) {
      res.status(404).json({
        status: 'error',
        message: 'User not found',
      });
    }

    if (sender.amount <= amount) {
      res.status(404).json({
        status: 'error',
        message: 'Not enough money',
      });
    } else {
      const senderNewAmount = sender.amount - amount;
      const receiverNewAmount = receiver.amount + amount;
      await User.update(
        { amount: senderNewAmount },
        { where: { accountNumber: senderUserId } }
      );
      await User.update(
        { amount: receiverNewAmount },
        { where: { accountNumber: receiverUserId } }
      );
    }

    const newTransfer = await Transfer.create({
      date,
      amount,
      senderUserId,
      receiverUserId,
    });
    res.status(201).json({ newTransfer });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { insertAmount };
