import React from "react";
import "./login.css";
import applogo from "../assets/applogo2.PNG";
import { useNavigate } from "react-router-dom";
import MainPage from "./mainPage";

const Login = () => {
    const navigate = useNavigate();
    const handleClicktoMainPage = () => {
        navigate("/mainPage");
    }
  return (
    <>
        <div className="login-container">
            <div className="heading">
                <h2>Login Page</h2>
                <a className="aha" href="/">Already have account ?</a>
            </div>
            <div className="spacer">
                <div className="login-form">
                <form>
                    <div className="form-div">
                        <label htmlFor="username">Email:</label>
                        <input type="text" id="useremail" name="useremail" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>
                    <div>
                        <a className="aha2" href="/">Already have account ?</a>
                        <button onClick={handleClicktoMainPage} className="login-btn" type="submit">Login</button>
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