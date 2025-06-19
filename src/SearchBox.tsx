// src/SearchBox.tsx
import React, { useState } from "react";
import "./SearchBox.css";

const SearchBox: React.FC = () => {
    const [query, setQuery] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Search for:", query);
    };

    return (
        <div className="search-box-container">
            <div className="left-decoration">👧📚🧒</div>
            <div className="search-wrapper">
                <form className="search-form" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="What would you like to learn?"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="search-input"
                    />
                    <button type="submit" className="search-button">Search</button>
                </form>
            </div>
            <div className="right-decoration">🚀🚀</div>
        </div>
    );
};

export default SearchBox;
