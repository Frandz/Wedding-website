import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HeroSection from "./components/HeroSection/HeroSection";
import MainPage from "./pages/MainPage/MainPage";
import "./App.css";

const SONG_URL =
  "https://res.cloudinary.com/dfbfbnjb1/video/upload/v1775285500/Tahanan_-_Wedding_Version_c_El_Manu_Jessy_Kang_Official_Audio_axhyvg.mp3";

function App() {
  const [entered, setEntered] = useState(false);
  const audioRef = useRef(null);

  const handleEnter = () => {
    setEntered(true);
    if (audioRef.current) {
      audioRef.current.play().catch(() => {});
    }
  };

  return (
    <Router>
      <div className="app">
        <audio ref={audioRef} src={SONG_URL} loop />
        {!entered ? (
          <HeroSection onNavigateToStory={handleEnter} />
        ) : (
          <MainPage />
        )}
      </div>
    </Router>
  );
}

export default App;
