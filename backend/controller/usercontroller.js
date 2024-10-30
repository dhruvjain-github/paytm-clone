const express = require("express");
const { User,Account} = require("../db");
const { JWT_SECRET } = require("../config");

const zod = require("zod");
const jwt = require("jsonwebtoken");
const bcrypt=require("bcrypt");

const signupBody = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
});

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
});

const updatebody=zod.object({
    username:zod.string().email().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
    password: zod.string().optional()
})

const HashPassword=async(password)=>{
    const salt=await bcrypt.genSalt(10)
    const hashedPass=await bcrypt.hash(password,salt)
    return hashedPass
}

const comparePassword=async(plainpass,hashpass)=>{
    const ismatch=await bcrypt.compare(plainpass,hashpass)
    return ismatch
}



async function signup(req, res) {
    const parsedBody = signupBody.safeParse(req.body);

    if (!parsedBody.success) {
        return res.status(400).json({
            message: "Incorrect inputs"
        });
    }

    const { username, password, firstName, lastName } = req.body;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
        return res.status(409).json({
            message: "Email already taken"
        });
    }

    const newpass=await HashPassword(password)
    const user = await User.create({
        username,
        password:newpass,
        firstName,
        lastName
    });
    const userId = user._id;

    //creating account

    Account.create({
        userId,
        balance:1+ Math.floor(Math.random()*10000)
    })


    const token = jwt.sign({ userId: user._id }, JWT_SECRET);

    res.status(201).json({
        message: "User created successfully",
        token: token
    });
}

async function signin(req, res) {
    const parsedBody = signinBody.safeParse(req.body);

    if (!parsedBody.success) {
        return res.status(400).json({
            message: "Incorrect inputs"
        });
    }

    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const isMatch = await comparePassword(password, user.password);
    if (!isMatch) {
        return res.status(401).json({
            message: "Invalid password"
        });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET);

    res.json({
        message: "Signin successful",
        token: token
    });
}

async function update(req, res) {
    const parsedBody = updatebody.safeParse(req.body);
    
    if (!parsedBody.success) {
        return res.status(400).json({
            message: "Error while updating information"
        });
    }

    // shallow copy of parse body data
    const updatedData = { ...parsedBody.data };

    if (updatedData.password) {
        updatedData.password = await HashPassword(updatedData.password);
    }

    try {
        await User.updateOne({ _id: req.userId }, updatedData);
        res.json({
            message: "Updated successfully"
        });
    } catch (error) {
        res.status(500).json({
            message: "Failed to update user information"
        });
    }
}

module.exports = { signup, signin,update};
