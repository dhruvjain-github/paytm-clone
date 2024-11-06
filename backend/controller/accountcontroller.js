const express = require("express");
const {Account,User}=require('../db');
const { default: mongoose } = require("mongoose");

async function getbalance(req,res) {
    const account=await Account.findOne({userId:req.userId})

    res.json({
        balance: account.balance
    })
}


// Body
// {
// 	to: string,
// 	amount: number
// }

async function transfermoney(req, res) {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { amount, to } = req.body;
        console.log("Received transfer request:", { amount, to, userId: req.userId });

        // Validate input fields
        if (!to || !amount) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Missing required fields: 'to' and/or 'amount'" });
        }

        // Fetch sender's account
        const senderAccount = await Account.findOne({ userId: req.userId }).session(session);
        if (!senderAccount || senderAccount.balance < amount) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Insufficient balance or invalid account" });
        }

        // Fetch recipient user by ID
        const recipientUser = await User.findOne({ userId: to }).session(session);
        if (!recipientUser) {
            await session.abortTransaction();
            return res.status(400).json({ message: "Invalid recipient account" });
        }

        // Perform transfer: deduct from sender and add to recipient
        await Account.updateOne(
            { userId: req.userId },
            { $inc: { balance: -amount } }
        ).session(session);

        await Account.updateOne(
            { userId: to },
            { $inc: { balance: amount } }
        ).session(session);

        await session.commitTransaction();
        res.json({ message: "Transfer successful" });
    } catch (error) {
        // Roll back any changes if an error occurs
        await session.abortTransaction();
        console.error("Transaction error:", error);
        res.status(500).json({ message: "An error occurred during the transfer" });
    } finally {
        session.endSession();
    }
}


module.exports={getbalance,transfermoney}