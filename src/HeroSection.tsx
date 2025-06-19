// src/HeroSection.tsx
import React from "react";
import "./HeroSection.css";

const floatingIcons = [
    "📚", "🧩", "🎨", "🔢", "🎼", "🌍", "🔤", "🧪"
];

const HeroSection: React.FC = () => {
    return (
        <section className="hero">
            <div className="hero-left">
                <div className="kid-illustration" aria-hidden="true">
                    {/* Simple kid with tablet SVG or emoji style */}
                    <span role="img" aria-label="kid with tablet" className="kid-emoji">🧒📱</span>
                </div>
            </div>

            <div className="hero-content">
                <h1>Welcome to TinyTap Campus!</h1>
                <p>Play. Learn. Grow. Explore learning through fun, interactive games and adventures.</p>
                <button>Start Learning</button>

                <div className="floating-icons">
                    {floatingIcons.map((icon, i) => (
                        <span key={i} className={`icon icon-${i}`} aria-hidden="true">{icon}</span>
                    ))}
                </div>
            </div>

            <div className="hero-bg-balloons" aria-hidden="true">
                {/* Animated balloons */}
                <span className="balloon balloon-1">🎈</span>
                <span className="balloon balloon-2">🎈</span>
                <span className="balloon balloon-3">🎈</span>
                <span className="balloon balloon-4">🎈</span>
                <span className="balloon balloon-5">🎈</span>
            </div>
        </section>
    );
};

export default HeroSection;
