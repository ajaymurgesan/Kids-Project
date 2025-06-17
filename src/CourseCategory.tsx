import React from 'react';
import './CourseCategory.css';

const categories = [
    { icon: '🎨', name: 'Art & Creativity' },
    { icon: '🔢', name: 'Math Games' },
    { icon: '🌍', name: 'Geography' },
    { icon: '🔤', name: 'English Skills' },
    { icon: '🧪', name: 'Science' },
    { icon: '🎼', name: 'Music' },
];

const CourseCategory: React.FC = () => {
    return (
        <section className="category-section">
            <h2>Explore by Category</h2>
            <div className="category-grid">
                {categories.map((cat, i) => (
                    <div key={i} className="category-card">
                        <div className="icon">{cat.icon}</div>
                        <p>{cat.name}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CourseCategory;
