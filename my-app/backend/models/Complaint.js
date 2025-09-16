const mongoose = require("mongoose");

const ComplaintSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
}, { timestamps: true });

module.exports = mongoose.model("Complaint", ComplaintSchema);
