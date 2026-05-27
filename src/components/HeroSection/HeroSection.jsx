import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import weddingPhoto from "../../assets/Frandz&Jennie-23.jpg";
import "./HeroSection.css";

const HeroSection = ({ onNavigateToStory }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const navigate = useNavigate();

  const hackerMessage =
    "> SYSTEM BREACH DETECTED... COUPLE_INfiltration.exe INITIALIZED";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < hackerMessage.length) {
        setTypedText(hackerMessage.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const handleStoryClick = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };

  const handleConfirm = () => {
    setShowPopup(false);
    if (onNavigateToStory) onNavigateToStory();
    navigate("/story");
  };

  return (
    <>
      <section
        className="hero-container"
        style={{ backgroundImage: `url(${weddingPhoto})` }}
      >
        <div className="hero-overlay">
          {/* Matrix Rain Effect */}
          <div className="matrix-rain">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="matrix-column"
                style={{ left: `${i * 5}%`, animationDelay: `${i * 0.1}s` }}
              >
                {Array.from({ length: 30 }).map((_, j) => (
                  <span key={j} className="matrix-char">
                    {String.fromCharCode(0x30a0 + Math.random() * 96)}
                  </span>
                ))}
              </div>
            ))}
          </div>

          <div className="scanline"></div>
          <div className="glitch-overlay"></div>

          <div className="hero-content">
            {/* The Main Hacked Window */}
            <div className="main-hacker-window">
              <div className="window-title-bar">
                <span className="title-text">
                  ⚠️ CRITICAL_SYSTEM_FAILURE.exe
                </span>
                <div className="window-controls">
                  <span className="ctrl">_</span>
                  <span className="ctrl">□</span>
                  <span className="ctrl">X</span>
                </div>
              </div>

              <div className="window-body">
                <div className="hacker-icon-large">💀</div>
                <h2 className="breach-title">YOU ARE HACKED</h2>
                <p className="breach-subtitle">by Frndz & Jennie</p>

                <div className="breach-details">
                  <div className="terminal-line">
                    <span className="prompt">$</span>
                    <span className="typed-text">{typedText}</span>
                    <span className={`cursor ${showCursor ? "visible" : ""}`}>
                      _
                    </span>
                  </div>
                  <div className="terminal-output">
                    <p className="success-line">✓ IP_TRACE: REDACTED</p>
                    <p className="success-line">✓ ENCRYPTION: BYPASSED</p>
                    <p className="success-line">✓ FIREWALL: DISABLED</p>
                    <p className="warning-line">⚠ STORY_FILES_COMPROMISED</p>
                    <p className="warning-line">⚠ HEART_DATA_EXTRACTED</p>
                  </div>

                  {/* Moved Button inside the green terminal box */}
                  <a
                    href="/story"
                    className="story-button hacker-btn"
                    onClick={handleStoryClick}
                    style={{
                      fontSize: "0.7rem",
                      padding: "5px 10px",
                      marginTop: "10px",
                    }}
                  >
                    <span className="btn-bracket">[</span>
                    <span className="btn-text">PROCEED_TO_WEDDING_WEBSITE</span>
                    <span className="btn-bracket">]</span>
                    <span className="btn-arrow">→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="hero-date">
              <span className="log-prefix">LOG_STAMP:</span>
              <span className="log-date">FEB_02_2027</span>
              <span className="log-status">●</span>
            </div>
          </div>
        </div>
      </section>

      {/* Earphones Popup remains as the secondary verification */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-modal hacker-modal">
            <div className="terminal-header">
              <span className="header-icon">🎵</span>
              AUDIO_HARDWARE_CHECK
            </div>
            <h2 className="popup-title hacker-text">USE_EARPHONES</h2>
            <div className="terminal-body">
              <p className="terminal-line-popup">
                {">"} Audio drivers initializing...
              </p>
              <p className="terminal-line-popup">
                {">"} High-fidelity signal detected.
              </p>
              <p className="terminal-line-popup">
                {">"} Wear earphones for full decryption.
              </p>
              <p className="terminal-line-popup warning">
                {">"} WARNING: Emotional data incoming.
              </p>
            </div>
            <button
              className="popup-confirm-btn hacker-confirm"
              onClick={handleConfirm}
            >
              <span className="btn-bracket">[</span>
              START_DECODING
              <span className="btn-bracket">]</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
