import React from "react";
import { Link } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import "./LoginPage.css";

const clientId = "YOUR_GOOGLE_CLIENT_ID"; // Replace with your actual client ID

const LoginPage: React.FC = () => {
    const handleGoogleSuccess = (credentialResponse: any) => {
        // You’ll get the Google credential here
        console.log("Google login success:", credentialResponse);
        // You can send this credential to your backend for verification/authentication
    };

    const handleGoogleFailure = () => {
        console.log("Google login failed");
    };

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <div className="login-container">
                <div className="login-box">
                    <h2>Welcome Back 👋</h2>
                    <p>Please log in to continue</p>
                    <form className="login-form">
                        <input type="email" placeholder="Email" required />
                        <input type="password" placeholder="Password" required />
                        <button type="submit">Log In</button>
                    </form>
                    <div style={{ margin: "16px 0", textAlign: "center" }}>
                        <span>or</span>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <GoogleLogin
                            onSuccess={handleGoogleSuccess}
                            onError={handleGoogleFailure}
                        />
                    </div>
                    <div className="login-footer">
                        <p>
                            Don't have an account? <Link to="/signup">Sign Up</Link>
                        </p>
                    </div>
                </div>
            </div>
        </GoogleOAuthProvider>
    );
};

export default LoginPage;
