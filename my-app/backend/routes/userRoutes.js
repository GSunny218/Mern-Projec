const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Signup route
router.post("/signup", async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;

    // Phone validation
    if (!/^\d{10}$/.test(phone)) {
      return res.status(400).json({ error: "Phone must be exactly 10 digits" });
    }

    // Password validation (min length 6)
    if (!password || password.length < 6) {
      return res.status(400).json({ error: "Password must be at least 6 characters" });
    }

    // Check uniqueness of email or phone
    const userExists = await User.findOne({ $or: [{ email }, { phone }] });
    if (userExists) {
      return res.status(409).json({ error: "Email or phone already in use" });
    }

    // Save user with plain text password
    const newUser = new User({ username, email, phone, password });
    await newUser.save();

    res.status(201).json({ message: "Signup successful!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Signup failed" });
  }
});

// Login route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    // Plain text password check
    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    // Login success
    res.json({ message: "Login successful", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Login failed" });
  }
});

module.exports = router;
