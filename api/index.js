import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./routes/User.route.js";
import authRoute from "./routes/auth.route.js";

dotenv.config();

mongoose
  .connect(process.env.mongoDbConnection)
  .then(() => {
    console.log("MongoDB Server connected Successfully");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

// app.use(cors());
app.use(express.json());
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is Listining on ${PORT}`);
});

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
