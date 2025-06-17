import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

const LoginPage: React.FC = () => {
    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Welcome Back 👋</h2>
                <p>Please log in to continue</p>
                <form className="login-form">
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Log In</button>
                </form>
                <div className="login-footer">
                    <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
