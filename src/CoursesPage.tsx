import React from "react";
import "./CoursesPage.css";

const courses = [
    { id: 1, title: "Math Fun", description: "Learn math with fun games!", icon: "➗" },
    { id: 2, title: "Story Time", description: "Interactive stories to read", icon: "📚" },
    { id: 3, title: "Science Explorers", description: "Discover science with experiments", icon: "🔬" },
    { id: 4, title: "Art & Creativity", description: "Express yourself through art", icon: "🎨" },
    { id: 5, title: "Music Magic", description: "Explore sounds and rhythms", icon: "🎼" },
    { id: 6, title: "Geography Quest", description: "Learn about the world", icon: "🌍" },
];

const CoursesPage: React.FC = () => {
    return (
        <div className="courses-page">
            <h2>Explore Our Courses</h2>
            <div className="courses-grid">
                {courses.map(course => (
                    <div key={course.id} className="course-card">
                        <div className="course-icon">{course.icon}</div>
                        <h3>{course.title}</h3>
                        <p>{course.description}</p>
                        <button>Start</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CoursesPage;
