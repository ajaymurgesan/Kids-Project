import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/" className="logo-text">TinyLearn</Link>
            </div>
            <ul className="navbar-links">
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/games">Games</Link></li>
                <li><Link to="/create">Create</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
            <div className="navbar-auth">
                <Link to="/login"><button className="login-btn">Log In</button></Link>
                <Link to="/signup"><button className="signup-btn">Sign Up</button></Link>
            </div>
        </nav>
    );
};

export default Navbar;
