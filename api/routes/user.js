// api/routes/users.js
const express = require('express');
const connectToDatabase = require('../db');
const User = require('../models/user');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    await connectToDatabase();
    const { name, email } = req.body;
    const newUser = new User({ name, email });
    await newUser.save();
    res.status(201).json({ message: 'User saved successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    await connectToDatabase();
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;