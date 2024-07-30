const mongoose = require("mongoose");
const flightSchema = new mongoose.Schema({
  name: { type: String, required: true },

  from: { type: String, required: true },

  to: { type: String, required: true },

  delay: { type: String, enum: ["on time", "delay","cancel"], required: true },

  gate: { type: String, required: true },

  cancellation: { type: Boolean, required: true },

  delayTime: {
    type: String,
    default: "00:00",
    required: true,
   
  },

//   departureTime: {
//     type: Date,
//     required: true,
//   },
//   arrivalTime: {
//     type: Date,
//     required: true,
//   },
});

module.exports = mongoose.model("flights", flightSchema);