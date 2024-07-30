
const mongoose = require('mongoose');

const passengerSchema = new mongoose.Schema({
  passengerName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  flightNumber: { type: String, required: true }, 
});

module.exports = mongoose.model('passengers', passengerSchema);