const express = require('express');
const User = require('../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password)
        return res.status(400).json({ message: 'All fields are required' })
    const foundUser = await User.findOne({ email }).lean()
    if (!foundUser)
        return res.status(401).json({ message: "Unathorized1" })
    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (!isMatch) return res.status(401).json({ error: 'Unathorized2' });
    const userInfo = {
        _id: foundUser._id, userName: foundUser.userName, phone: foundUser.phone, email: foundUser.email,
        hasCar: foundUser.hasCar, driveringLicense: foundUser.driveringLicense, gender: foundUser.gender,
        driverSuggestions: foundUser.driverSuggestions, passengerSuggestions: foundUser.passengerSuggestions, createdAt: foundUser.createdAt
    }
    const accessToken = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET,)
    res.json({user:userInfo, accessToken: accessToken })
};


module.exports = { login }