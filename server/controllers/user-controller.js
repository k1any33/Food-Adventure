import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import User from '../models/userModel.js';

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: 'Email is not found!' });

    const validPassword = await bcrypt.compare(password, existingUser.password);

    if (!validPassword)
      return res.status(404).json({ message: 'Password is incorrect!' });

    const token = jwt.sign(
      { _id: existingUser._id },
      process.env.TOKEN_SECRET
      //   { expiresIn: '2h' }
    );

    res.status(200).json({ newUser: existingUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

export const register = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: 'Email already exist!' });

    if (password !== confirmPassword)
      return res.status(400).json({ message: 'Passwords do not match!' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name: `${firstName} ${lastName}`,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { _id: newUser._id },
      process.env.TOKEN_SECRET
      //   { expiresIn: '2h' }
    );
    res.status(200).json({ newUser, token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
};
