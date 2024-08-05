const User = require('../models/userSchema')


const getUserData = async (req, res) => {
  const data = await User.find()
  res.status(200).send(data)
};


const createUserData = async (req, res) => {
  const { email, password } = req.body;

  const existingUser = await User.findOne({ email })
  if (existingUser) {
    return res.status(400).send('User with this email already exists')
  }

  const data = await User.create({ email, password })
  res.status(201).send(data)
};


const loginData = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })
  if (!user || user.password !== password) {
    return res.status(401).send('Invalid email or password')
  }

  res.status(200).send('Login successful')
};

module.exports = {
  getUserData,
  createUserData,
  loginData
};
