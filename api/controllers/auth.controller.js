import User from "../models/User.model.js";
import bcrypt from "bcryptjs";
import { errorhandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashPassword = bcrypt.hashSync(password, 14);
  const newuser = new User({ username, email, password: hashPassword });
  try {
    await newuser.save();
    res.status(201).json("User created suceesfully");
  } catch (error) {
    next(error);
  }
};
