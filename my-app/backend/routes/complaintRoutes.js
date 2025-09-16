// routes/complaintRoutes.js
const express = require("express");
const router = express.Router();
const Complaint = require("../models/Complaint");

// Submit complaint
router.post("/", async (req, res) => {
  try {
    const complaint = new Complaint(req.body);
    await complaint.save();
    res.json({ message: "Complaint submitted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
