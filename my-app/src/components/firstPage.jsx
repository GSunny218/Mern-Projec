import React from "react";
import applogo from "../assets/applogo2.PNG";
import "./firstPage.css"; // Assuming you have a CSS file for styling
import python from "../assets/python.png"; // Importing Python image 
import html from "../assets/html-logo.png"; // Importing HTML image
import css from "../assets/css-logo.png"; // Importing CSS image
import fb from "../assets/facebook1.png"; // Importing Facebook image
import insta from "../assets/instagram.png"; // Importing Instagram image
import linkedin from "../assets/linkedin.png"; // Importing LinkedIn image
import x from "../assets/x.png"; // Importing X (formerly Twitter) image
import sql from "../assets/sql.png"; // Importing SQL image

const FirstPage = () => {
  return (
    <>
      <header>
        <nav className="navbar">
            <div className="logo-container">
                <img src={applogo} className="applogo" alt="Python" />
                <div className="app-name">SkillBtye</div>
            </div>
            <div  className="nav-links">
                <div className="about">
                    <a href="/">About Us</a>
                </div>
                <div className="contact">
                    <a href="/">Contact</a>
                </div>
                <button className="get-started-button">Get Started</button>
            </div>
        </nav>
      </header>
      <main>
        <section className="section-1">
            <h1 className="section-1-heading">Welcome to SkillByte</h1>
            <h5 className="section-1-description">
                Your journey to mastering skills starts here.
            </h5>
            <button className="get-started-button2">Get Started</button>
        </section>
        <section className="section-2">
            <div className="skills-section">
                <img src={python} className="python-logo" alt="Python" />
                <img src={html} className="html-logo" alt="HTML" />
                <img src={css} className="css-logo" alt="CSS" />
                <img src={sql} className="sql-logo" alt="SQL" />
            </div>
        </section>
        <section>
            <div className="section-3">
                <h1 className="section-3-heading">Learn and Grow 10 X Faster</h1>
                <p className="section-3-description-1">Why you choose us? We give you to upgrade your programming skills</p>
                <p className="section-3-description-2">
                    Explore our courses and resources to enhance your skills.
                </p>
            </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-content">
            <p>&copy; 2023 SkillByte. All rights reserved.</p>
            <div className="footer-links">
                <a href="/" className="privacy-policy">Privacy Policy</a>
                <a href="/" className="tns">Terms of Service</a>
            </div>
        </div>
        
        <div className="footer-social">
            <a href="/"><img className="social-link" src={fb} alt="" /></a>
            <a href="/"><img className="social-link" src={insta} alt="" /></a>
            <a href="/"><img className="social-link" src={linkedin} alt="" /></a>
            <a href="/"><img className="social-link" src={x} alt="" /></a>
        </div>
      </footer>
    </>
  );
}

export default FirstPage;