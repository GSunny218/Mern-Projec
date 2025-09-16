const mongoose = require("mongoose");

const FeedbackSchema = new mongoose.Schema({
  complaint: String,
  feedback: String,
}, { timestamps: true });

module.exports = mongoose.model("Feedback", FeedbackSchema);
