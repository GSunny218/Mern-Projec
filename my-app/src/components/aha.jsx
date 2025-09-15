import React from "react";
import "./aha.css";
import { Link, useNavigate } from "react-router-dom";
import codingVideo from "../assets/coding-video.mp4";
import { useState } from "react";

const Aha = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        phoneNumber: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Check if all fields are filled
        if (!formData.phoneNumber || !formData.email || !formData.password) {
            alert("Please fill in all fields");
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert("Please enter a valid email address");
            return;
        }
        // Basic phone number validation (10 digits)
        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(formData.phoneNumber)) {
            alert("Please enter a valid 10-digit phone number");
            return;
        }

        // If all validations pass, navigate to main page
        navigate("/mainPage");
    };
    return (
        <>
            <div className="aha-container">
                <div className="heading">
                    <h1>Welcome Back!</h1>
                    <h2>Access Your Existing Account</h2>
                    <Link className="aha" to="/login">Create a new account ?</Link>
                </div>
                <div className="spacer">
                    <div className="aha-form">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="phoneNumber">Phone Number:</label>
                                <input type="text" id="phoneNumber" placeholder="Please enter your mobile number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                            </div>
                            <div className="form-div">
                                <label htmlFor="email">Email:</label>
                                <input type="text" id="email" placeholder="Please enter your email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password:</label>
                                <input type="password" id="password" placeholder="Please enter your password" name="password" value={formData.password} onChange={handleChange} required />
                            </div>
                            <div>
                                <Link className="aha2" to="/login">Create a new account ?</Link>
                                <button className="login-btn" type="submit">Go</button>
                            </div>
                            <div>
                                <p><span>"</span><i>Clean code always looks like it was written by someone who cares</i><span>"</span></p>
                                <b>- Robert C. Martin</b>
                            </div>
                        </form>
                        
                    </div>
                    <div>
                        <video width="650" height="400" autoPlay loop controls muted>
                            <source src={codingVideo} type="video/mp4"/>
                        </video>
                        <h2 className="video-text">Code like a Pro!</h2>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Aha;