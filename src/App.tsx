// src/App.tsx
import React from "react";
import {BrowserRouter,Routes, Route} from "react-router-dom";

import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import CourseCategory from "./CourseCategory";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import SearchBox from "./SearchBox.tsx";
import GamesPage from "./GamesPage.tsx";
import AboutPage from "./AboutPage.tsx";
import CreatePage from "./CreatePage.tsx";
import CoursesPage from "./CoursesPage.tsx";
const HomePage = () => (
    <>
        <HeroSection />
        <CourseCategory />
    </>
);

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <SearchBox/>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/games" element={<GamesPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/create" element={<CreatePage />} />
                <Route path="/courses" element={<CoursesPage />} />

            </Routes>
        </BrowserRouter>
    );
};

export default App;
