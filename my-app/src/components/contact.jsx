import React from "react";
import "./contact.css"; // a CSS file for styles
import applogo from "../assets/applogo2.PNG"; // an image for the logo

const Contact = () => {
    return (
        <>
            <header>
                <div className="head-div">
                    <img src={applogo} alt="App Logo" className="app-logo" />
                    <h1>Contact Us</h1>
                </div>
            </header>
            <main>
                <h2>If you have any questions or feedback, feel free to reach out!</h2>
                <div className="main-div">
                    <div className="contact-info">
                        <h3>Direct Contact To Us</h3>
                        <p>If your problem is huge</p>
                        <p>Contact us at:</p>
                        <p>Email: <b>skillsbyte100@gmail.com</b></p>
                        <p>Phone: <b>+91 9321070483</b></p>
                        <p>Address: <b>Sion Trombay, Jyotiba Phule Road, Chembur, Mumbai, Maharashtra, India</b></p>
                        <h6>We are here to help you!</h6>
                    </div>
                    <div className="contact-container">
                        <form className="contact-form">
                            <h2>Greivance and Complaints, If any</h2>

                            <label htmlFor="name">Name:</label>
                            <input type="text" placeholder="Please Enter Your Name Here" id="name" name="name" required />
                            
                            <label htmlFor="email">Email:</label>
                            <input type="email" placeholder="Please Enter Your Email Here" id="email" name="email" required />
                            
                            <label htmlFor="message">Message:</label>
                            <textarea id="message" placeholder="Please Leave A Messege" name="message" required></textarea>
                            
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
            </main>
            <footer className="footer"> 
                <h2 className="footer-h2">Feedback</h2>
                <form className="footer-form">
                    <label htmlFor="feedback">Your Feedback:</label>
                    <textarea type="text" id="feedback" placeholder="Commit Your Feedback About Our App" name="feedback" className="feed-textarea" rows="4" cols='100' required></textarea>
                    
                    <button type="submit">Submit Feedback</button>
                </form>
            </footer>
        </>
    );
}

export default Contact;