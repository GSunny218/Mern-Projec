import React from "react";

const Login = () => {
  return (
    <>
        <div className="login-container">
            <h2>Login Page</h2>
            <form>
                <div className="f">
                    <label htmlFor="username">Email:</label>
                    <input type="text" id="username" name="username" required />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    </>
  );
}

export default Login;