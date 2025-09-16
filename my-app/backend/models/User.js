const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  phone: { 
    type: String, 
    required: true, 
    unique: true, 
    match: [/^\d{10}$/, 'Phone must be exactly 10 digits'] 
  },
  password: { 
    type: String, 
    required: true,
    minlength: [6, 'Password must be at least 6 characters']
  }
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
