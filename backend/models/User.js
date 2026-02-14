const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  preferences: {
    climate: String,
    budget: Number,
    duration: Number,
    activities: [String]
  }
});

module.exports = mongoose.model("User", userSchema);
