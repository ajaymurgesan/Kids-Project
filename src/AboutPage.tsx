// src/AboutPage.tsx
import React from "react";
import "./AboutPage.css";

const AboutPage: React.FC = () => {
    return (
        <div className="about-container">
            <div className="about-box">
                <h1>About TinyLearn 🌈</h1>
                <p>
                    Welcome to <span className="highlight">TinyLearn</span> — a magical place where learning feels like play! 🎉
                </p>
                <p>
                    Our mission is to help kids <strong>explore</strong>, <strong>create</strong>, and <strong>grow</strong> through fun educational games. ✨
                </p>
                <p>
                    Whether it’s solving math puzzles 🧩, coloring fun art 🎨, or learning new words 🔤, there’s always something exciting here!
                </p>
                <p>
                    Designed by child education experts, our platform is filled with love, laughter, and curiosity. 💡💖
                </p>
                <p className="decorative-icons">🎈 📚 ✨ 🎨 🧸 🌈 📖 ✏️ 🧠 🎶 ⭐</p>
            </div>

            {/* Floating animated emojis */}
            <div className="floating emoji balloon" style={{ top: "8%", left: "5%" }}>🎈</div>
            <div className="floating emoji star" style={{ top: "20%", right: "8%" }}>⭐</div>
            <div className="floating emoji cloud" style={{ bottom: "15%", left: "10%" }}>☁️</div>
            <div className="floating emoji crayon" style={{ bottom: "10%", right: "12%" }}>🖍️</div>
            <div className="floating emoji sparkle" style={{ top: "40%", left: "48%" }}>✨</div>
            <div className="floating emoji book" style={{ top: "60%", left: "5%" }}>📖</div>
            <div className="floating emoji rainbow" style={{ top: "10%", right: "40%" }}>🌈</div>
            <div className="floating emoji teddy" style={{ bottom: "18%", right: "30%" }}>🧸</div>
            <div className="floating emoji pencil" style={{ top: "30%", left: "25%" }}>✏️</div>
            <div className="floating emoji music" style={{ top: "65%", right: "8%" }}>🎶</div>
        </div>
    );
};

export default AboutPage;
