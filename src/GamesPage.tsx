// src/GamesPage.tsx
import React from "react";
import "./GamesPage.css";

const games = [
    {
        title: "Math Puzzle",
        description: "Solve fun math problems!",
        image: "🧮",
    },
    {
        title: "Word Quiz",
        description: "Test your vocabulary skills!",
        image: "📝",
    },
    {
        title: "Animal Sounds",
        description: "Guess the animal by its sound!",
        image: "🐶",
    },
    {
        title: "Color Match",
        description: "Match the correct colors!",
        image: "🎨",
    },
    {
        title: "Shape Finder",
        description: "Learn and identify shapes!",
        image: "🔺",
    },
    {
        title: "Memory Game",
        description: "Boost your memory!",
        image: "🧠",
    },
];

const GamesPage: React.FC = () => {
    return (
        <section className="games-section">
            <h2 className="games-heading">Fun & Educational Games 🎮</h2>
            <div className="games-grid">
                {games.map((game, index) => (
                    <div className="game-card" key={index}>
                        <div className="game-icon">{game.image}</div>
                        <h3>{game.title}</h3>
                        <p>{game.description}</p>
                        <button className="play-button">Play</button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GamesPage;
