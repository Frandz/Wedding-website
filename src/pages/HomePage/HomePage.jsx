import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection.jsx";
import "./HomePage.css";

const HomePage = ({ onNavigateToStory }) => {
  return (
    <div className="home-page">
      <HeroSection onNavigateToStory={onNavigateToStory} />
    </div>
  );
};

export default HomePage;
