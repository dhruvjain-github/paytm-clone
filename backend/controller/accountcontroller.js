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

async function transfermoney(req,res) {

    const session=await mongoose.startSession()
    session.startTransaction()


    const account=await Account.findOne({userId:req.userId}).session(session)
    const { amount, to } = req.body;

    if(!account||account.balance<amount)
    {
        await session.abortTransaction()
        return res.status(400).json({
            message: "Insufficient balance"
        })
    }

    const user=await User.findOne({userId:to}).session(session)

    if(!user)
    {
        await session.abortTransaction()
        return res.status(400).json({
            message: "Invalid user account"
        })
    }

    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);

    await session.commitTransaction();
    res.json({
        message: "Transfer successful"
    });

}

module.exports={getbalance,transfermoney}