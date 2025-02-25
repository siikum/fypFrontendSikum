import React from "react";
import { Link } from "react-router-dom";
import "../styles/Login.css";

const Login = () => {
  return (
    <div className="login-container">
      {/* Background Image */}
      <div className="background-image"></div>

      {/* Login Card */}
      <div className="login-card">
        <div className="form-header">
          <h2>Login</h2>
          <span className="auth-toggle"> / <Link to="/Signup" className="signup-link">Sign Up</Link></span>
        </div>

        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" required />
          </div>

          <button type="submit" className="login-button">Login</button>

          {/* Forgot Password Link */}
          <div className="forgot-password">
            <p>Forgot your password? <Link to="/reset-password" className="reset-link">Reset here</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
