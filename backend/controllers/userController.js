// const User = require("../models/userModel");
const mongoose = require("mongoose");


// Services
const { matchPassword, createToken, updatePassword } = require("../services/authService");
const { sendMail } = require("../services/emailService");

// Helpers
const { getSingleUser } = require("../helper/userHelper");

// login the user
const loginUser = async (req, res) => {
  console.log(req.body);
  const { userId, password } = req.body;
  try {
    const user = await getSingleUser({ userId });
    if (!user) {
      throw Error("User does not exist");
    }

    const match = await matchPassword(password, user.password);
    if (!match) {
      throw Error("Incorrect password");
    }

    const token = await createToken(userId, "7d");
    res.status(200).json({ userId, token, name: user.name, email: user.email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Forgot Password
const forgotPassword = async (req, res) => {
  const { userId } = req.body;

  try {
    const user = await getSingleUser({ userId });
    if (!user) {
      throw Error("User does not exist");
    }
    const token = await createToken(userId, "5m");
    const result = await sendMail(token, user);

    res.status(200).json({ userEmail: user.email });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// Verify Email
const verifyUser = async (req, res) => {
  const { userId } = req.user;
  if (!userId) {
    res.status(400).json({ error: error.message });
  }
  res.status(200).json({ userId });
};

// Reset Password
const resetPassword = async (req, res) => {
  const { userId, password, newPassword } = req.body;
  try {
    if (newPassword) {
      const user = await getSingleUser({ userId });
      const match = await matchPassword(password, user.password);
      if (!match) {
        throw new Error("Incorrect password");
      }
    }

    const result = await updatePassword(userId, newPassword ? newPassword : password)
    res.status(200).json(`Password for ${userId} Updated Successfully`);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  forgotPassword,
  verifyUser,
  resetPassword,
};
