import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

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
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is Listining on ${PORT}`);
});
