import User from "../models/User.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const hashPassword = bcrypt.hashSync(password, 14);
  let newuser = User.create({ username, email, password: hashPassword });
  try {
    await newuser.save();
    res.status(201).json("User created suceesfully");
  } catch (err) {
    res.status(500).json(err.mesage);
  }
};
