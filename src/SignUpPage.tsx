// src/SignUpPage.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./SignUpPage.css";

const SignUpPage: React.FC = () => {
    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>Create Account 🎉</h2>
                <p>Join us and start learning today</p>
                <form className="signup-form">
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Sign Up</button>
                </form>
                <div className="signup-footer">
                    <p>Already have an account? <Link to="/login">Log In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;
