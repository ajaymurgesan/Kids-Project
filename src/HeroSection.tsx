import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Welcome to TinyTap Campus</h1>
                <p>Play. Learn. Grow. Explore learning through fun, interactive games.</p>
                <button>Start Learning</button>
            </div>
        </section>
    );
};

export default HeroSection;
