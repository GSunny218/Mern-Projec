import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [complaintData, setComplaintData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [feedbackData, setFeedbackData] = useState({
    complaint: "",
    feedback: "",
  });

  const [message, setMessage] = useState("");

  // Submit complaint handler
  const submitComplaint = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/complaints", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(complaintData),
      });
      const data = await res.json();
      if (res.ok) {
        alert("✅ Complaint submitted successfully!");
        setMessage("Complaint submitted successfully!");
        setComplaintData({ name: "", email: "", message: "" });
      } else {
        alert(`❌ ${data.error || "Failed to submit complaint"}`);
        setMessage(data.error || "Failed to submit complaint");
      }
    } catch (err) {
      alert("⚠️ Network error: Complaint not submitted");
      setMessage("Network error: Complaint not submitted");
    }
  };

  // Submit feedback handler
  const submitFeedback = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5000/api/feedbacks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedbackData),
      });
      const data = await res.json();
      if (res.ok) {
        alert("✅ Feedback submitted successfully!");
        setMessage("Feedback submitted successfully!");
        setFeedbackData({ complaint: "", feedback: "" });
      } else {
        alert(`❌ ${data.error || "Failed to submit feedback"}`);
        setMessage(data.error || "Failed to submit feedback");
      }
    } catch (err) {
      alert("⚠️ Network error: Feedback not submitted");
      setMessage("Network error: Feedback not submitted");
    }
  };

  return (
    <div className="main-div">
      {/* Contact Information */}
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Email: <b>skillsbyte100@gmail.com</b></p>
        <p>Phone: <b>+91 9321070483</b></p>
        <p>Address: <b>Sion Trombay, Jyotiba Phule Road, Chembur, Mumbai, Maharashtra, India</b></p>
      </div>
      
      {/* Complaint Form */}
      <div className="contact-container">
        <h3>Submit a Grievance (Complaint)</h3>
        <form onSubmit={submitComplaint} className="contact-form">
          <input
            type="text"
            placeholder="Your Name"
            value={complaintData.name}
            onChange={(e) => setComplaintData({ ...complaintData, name: e.target.value })}
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            value={complaintData.email}
            onChange={(e) => setComplaintData({ ...complaintData, email: e.target.value })}
            required
          />
          <textarea
            placeholder="Message"
            value={complaintData.message}
            onChange={(e) => setComplaintData({ ...complaintData, message: e.target.value })}
            required
          />
          <button type="submit">Submit Complaint</button>
        </form>
      </div>

      {/* Feedback Form */}
      <div className="contact-container">
        <h3>Submit Feedback</h3>
        <form onSubmit={submitFeedback} className="contact-form">
          <input
            type="text"
            placeholder="Complaint reference (optional)"
            value={feedbackData.complaint}
            onChange={(e) => setFeedbackData({ ...feedbackData, complaint: e.target.value })}
          />
          <textarea
            placeholder="Your Feedback"
            value={feedbackData.feedback}
            onChange={(e) => setFeedbackData({ ...feedbackData, feedback: e.target.value })}
            required
          />
          <button type="submit">Submit Feedback</button>
        </form>
      </div>

      {/* Response Message (shown for both) */}
      {message && <p className="response-message">{message}</p>}
    </div>
  );
};

export default Contact;
