const mongoose = require("mongoose");



const destinationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  climate: { type: String, required: true },
  budgetMin: Number,
  budgetMax: Number,
  durationMin: Number,
  durationMax: Number,
  activities: [String],
  description: String,
  image: String 
});

module.exports = mongoose.model("Destination", destinationSchema);
//module.exports = mongoose.model("Destination", destinationSchema);

