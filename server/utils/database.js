const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const databaseConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected successfully");
  } catch (err) {
    console.error("Database connection error:", err);
  }
};

module.exports = databaseConnect;
