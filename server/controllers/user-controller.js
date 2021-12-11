import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import UserModal from '../models/userModel.js';

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await UserModal.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist!" });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(404).json({ message: 'Password is incorrect!' });

    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      'foodAdventure',
      { expiresIn: '2h' }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' });
  }
};

export const register = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  try {
    const existingUser = await UserModal.findOne({ email });

    if (existingUser)
      return res.status(400).json({ message: 'User already exist!' });

    if (password != confirmPassword)
      return res.status(400).json({ message: 'Passwords do not match!' });

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await UserModal.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      'foodAdventure',
      { expiresIn: '2h' }
    );

    res.status(200).json({ result, token });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong!' });
  }
};
