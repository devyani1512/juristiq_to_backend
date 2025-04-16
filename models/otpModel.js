const mongoose = require("mongoose");
require("../db");
const otpSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  otp: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now, expires: 300 }, // OTP expires in 5 minutes
});

module.exports = mongoose.model("Otp", otpSchema);
