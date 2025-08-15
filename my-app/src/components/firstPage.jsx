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
import amazonlogo from "../assets/amazon.png"; // Importing Amazon image
import googlelogo from "../assets/google-logo.png"; // Importing Google image
import metalogo from "../assets/meta-logo.png"; // Importing Meta image
import microsoftlogo from "../assets/microsoft-logo.png"; // Importing Microsoft image
import nvidialogo from "../assets/nvidia.png"; // Importing Nvidia image
import teslalogo from "../assets/tesla-logo.png"; // Importing Tesla image
import applelogo from "../assets/apple-logo.png"; // Importing Apple image
import sql from "../assets/sql.png"; // Importing SQL image
import { Link, Outlet } from "react-router-dom"; // Importing Link for navigation

const FirstPage = () => {
    const lessThan = "<";
    const greaterThan = ">";
    const slash = "/";
  return (
    <>
      <header>
        <nav className="navbar">
            <div className="logo-container">
                <img src={applogo} className="applogo" alt="Python" />
                <div className="app-name"><span className="less-than">{lessThan}</span><span className="slash">{slash}</span><span className="app-head-title">SkillBtyes</span><span className="greater-than">{greaterThan}</span></div>
            </div>
            <div  className="nav-links">
                <div>
                    <a href="about"  className="about">About Us</a>
                </div>
                <div>
                    <a to="contact"  className="contact">Contact</a>
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
        <section className="section-4">
            <p className="section-4-description-1">Get Job In Large Company</p>
            <div>
                <marquee behavior="scroll" direction="left">
                    <img className="amazon-logo" src={amazonlogo} alt="Amazon" />
                    <img className="google-logo" src={googlelogo} alt="Google" />
                    <img className="meta-logo" src={metalogo} alt="Meta" />
                    <img className="microsoft-logo" src={microsoftlogo} alt="Microsoft" />
                    <img className="nvidia-logo" src={nvidialogo} alt="Nvidia" />
                    <img className="tesla-logo" src={teslalogo} alt="Tesla" />
                    <img className="apple-logo" src={applelogo} alt="Apple" />
                </marquee>
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