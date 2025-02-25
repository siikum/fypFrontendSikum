import React from "react";
import { Link } from "react-router-dom";
import "../styles/SignUp.css";

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-background-image"></div>

      <div className="signup-card">
        <div className="form-header">
          <h2>Sign Up</h2>
          <span className="auth-toggle"> / <Link to="/login" className="login-link">Login</Link></span>
        </div>

        <form>
          <div className="input-row">
            <div className="input-group">
              <label>First Name</label>
              <input type="text" required />
            </div>
            <div className="input-group">
              <label>Last Name</label>
              <input type="text" required />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              <label>Email</label>
              <input type="email" required />
            </div>
            <div className="input-group">
              <label>Phone Number</label>
              <input type="tel" required />
            </div>
          </div>

          <div className="input-row">
            <div className="input-group">
              <label>Password</label>
              <input type="password" required />
            </div>
            <div className="input-group">
              <label>Confirm Password</label>
              <input type="password" required />
            </div>
          </div>

          {/* Checkbox for terms and conditions */}
          <div className="terms-checkbox">
            <label>
              <input type="checkbox" required />
              By creating an account, I agree to this website's <a href="/privacy-policy">privacy policy</a> and <a href="/terms-of-service">terms of service</a>.
            </label>
          </div>

          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
