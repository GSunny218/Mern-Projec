import React from "react";
import "./login.css";
import { useState } from "react";
import applogo from "../assets/applogo2.PNG";
import { useNavigate } from "react-router-dom";
import MainPage from "./mainPage";
import { Link } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
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
        if (!formData.username || !formData.phoneNumber || !formData.email || !formData.password) {
            alert("Please fill in all fields");
            return;
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert("Please enter a valid email address");
            return;
        }
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
        <div className="login-container">
            <div className="heading">
                <h2>Create your New Account</h2>
                <Link className="aha" to="/aha">Already have account ?</Link>
            </div>
            <div className="spacer">
                <div className="login-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input type="text" id="username" placeholder="Please enter your username" name="username" value={formData.username} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phonenumber">Phone Number:</label>
                            <input type="text" id="phonenumber" placeholder="Please enter your mobile number" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
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
                            <Link className="aha2" to="/aha">Already have account ?</Link>
                            <button  className="login-btn" type="submit">Login</button>
                        </div>
                        <div>
                            <p><span>"</span><i>Clean code always looks like it was written by someone who cares</i><span>"</span></p>
                            <b>- Robert C. Martin</b>
                        </div>
                    </form>
                </div>
                <div>
                    <img className="applogo-login" src={applogo} alt="App logo" />
                </div>
            </div>
        </div>
    </>
  );
}

export default Login;