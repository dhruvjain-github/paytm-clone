const express = require('express');
const mongoose = require('mongoose');
const { Account, User } = require("../db");  // Ensure the models are correctly imported
const { getbalance, transfermoney } = require("../controller/accountcontroller");
const { authMiddleware } = require("../middleware");
const router = express.Router();

router.get("/balance", authMiddleware, getbalance);

router.post("/transfer", authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { amount, to } = req.body;

        // Check if amount and recipient are provided
        if (!amount || !to) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Amount and recipient are required" });
        }

        // Fetch sender's account
        const senderAccount = await Account.findOne({ userId: req.userId }).session(session);
        if (!senderAccount || senderAccount.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Insufficient balance" });
        }

        // Fetch recipient's account
        const recipientAccount = await Account.findOne({ userId: to }).session(session);
        if (!recipientAccount) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Invalid account" });
        }

        // Perform the transfer
        senderAccount.balance -= amount;
        recipientAccount.balance += amount;
        await senderAccount.save({ session });
        await recipientAccount.save({ session });

        // Commit the transaction
        await session.commitTransaction();
        res.json({ message: "Transfer successful" });
    } catch (error) {
        // Roll back transaction in case of error
        await session.abortTransaction();
        console.error("Transfer error:", error);
        res.status(500).json({ message: "Transfer failed" });
    } finally {
        session.endSession();
    }
});

module.exports = router;
