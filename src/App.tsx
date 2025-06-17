// src/App.tsx
import React from "react";
import {BrowserRouter,Routes, Route} from "react-router-dom";

import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import CourseCategory from "./CourseCategory";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import SearchBox from "./SearchBox.tsx";

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
            </Routes>
        </BrowserRouter>
    );
};

export default App;
