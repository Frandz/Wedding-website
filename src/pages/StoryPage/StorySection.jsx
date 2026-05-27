import React, { useState, useEffect } from "react";
import "../StoryPage/StoryPage.css";

import bv1 from "../../assets/BV-1.jpg";
import bv2 from "../../assets/BV-2.jpg";
import bv3 from "../../assets/BV-3.jpg";
import bv4 from "../../assets/BV-4.jpg";
import bv5 from "../../assets/BV-5.jpg";
import bv6 from "../../assets/BV-6.jpg";
import bv7 from "../../assets/BV-7.jpg";
import bv8 from "../../assets/BV-8.jpg";
import bv9 from "../../assets/BV-9.jpg";
import bv10 from "../../assets/BV-10.jpg";
import weddingPhoto from "../../assets/Frandz&Jennie-23.jpg";

const storyChapters = [
  { id: 1, type: "girl",    title: "Her Story",    subtitle: "In a world of code and algorithms, she never expected love to be the most complex program she'd ever run.", description: "Nagsimula ang kwento namin ng ma-assign akong QA sa team nila at naging innersource POC naman sya, skype pa gamit namin nun and ping ang mode of communications. Then eventually, napapansin ko palagi na syang tinutukso sakin and hindi ko alam kung bakit. Kapag nasa room sya sasabihin ng teammates nya Jennie si Frander oh. But walang moves ginagawa kuya mo :D kaya akala ko simpleng asaran lang", photo: bv1, icon: "👩‍💻" },
  { id: 2, type: "girl",    title: "Her Journey",  subtitle: "Every line of code she wrote was leading her to this moment, to him.", description: "Then months came, may nagsasabi na sakin crush nya daw ako but wala kong idea nun kasi wala naman fishy sa kanya. Naalala ko pa nun, kapag nasa CG1 sya, yung room namin is sa makabilang dulo ng corridor. Then mag a-away ako sa skype then bibilang ako ng 10seconds bago lumabas then paglabas ko lumabas din sya sa kabilang dulo ng corridor :D so its confirmed na crush nya nga ko kasi binabantayan nya ko sa skype :D", photo: bv2, icon: "💫" },
  { id: 3, type: "girl",    title: "Her Heart",    subtitle: "She learned that the strongest firewall couldn't protect her heart from love", description: "Then, nanligaw na sya and I turned him down many times, habang binabasted ko sya nun pinapatugtog yung Sa Ngalan Ng Pagibig by december avenue kaya yun yung theme song namin :D. Then eventually nakita ko sa kanya mga qualities na hinahanap ko sa isang guy. Kaya sinagot ko din sya noong January 01, 2020", photo: bv3, icon: "💖" },
  { id: 4, type: "boy",     title: "His Story",    subtitle: "He was debugging his life when he found the most beautiful error - love.", description: "", photo: bv4, icon: "👨‍💻" },
  { id: 5, type: "boy",     title: "His Mission",  subtitle: "Every algorithm he wrote now had one purpose - to win her heart.", description: "", photo: bv5, icon: "🎯" },
  { id: 6, type: "boy",     title: "His Promise",  subtitle: "He committed his heart to her repository, forever.", description: "", photo: bv6, icon: "💍" },
  { id: 7, type: "together", title: "Their Story",     subtitle: "Two branches of life merged into one beautiful main branch.", description: "", photo: bv7, icon: "💑" },
  { id: 8, type: "together", title: "Their Adventure", subtitle: "They started building their dream project - a lifetime of love.", description: "", photo: bv8, icon: "🚀" },
  { id: 9, type: "together", title: "Their Future",    subtitle: "Their love runs in an infinite loop, never crashing, always evolving.", description: "", photo: bv9, icon: "♾️" },
  { id: 10, type: "together", title: "Forever",        subtitle: "Today, they deploy the final version - their eternal love story.", description: "", photo: bv10, icon: "💒" },
];

const SLIDE_DURATION = 30000;

const StorySection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showEnd, setShowEnd] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || showEnd) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev >= storyChapters.length - 1) { setShowEnd(true); return prev; }
        return prev + 1;
      });
    }, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [isPaused, showEnd]);

  const handlePrevSlide = () => setCurrentSlide((p) => Math.max(0, p - 1));
  const handleNextSlide = () => {
    setCurrentSlide((p) => {
      if (p >= storyChapters.length - 1) { setShowEnd(true); return p; }
      return p + 1;
    });
  };
  const handleSkipToEnd = () => { setCurrentSlide(storyChapters.length - 1); setShowEnd(true); };

  const currentChapter = storyChapters[currentSlide];

  if (showEnd) {
    return (
      <div className="story-page">
        <div className="slideshow-background">
          <img src={weddingPhoto} alt="Our Wedding" className="slide-image active" />
          <div className="slideshow-overlay sunset-overlay" />
        </div>
        <div className="end-section">
          <div className="end-content">
            <div className="end-icon">💒</div>
            <h1 className="end-title">Feb 02, 2027</h1>
            <p className="end-subtitle">Save the Date</p>
            <p className="end-description">
              Join us as we celebrate the union of two hearts, two souls, and two codebases merged into one.
            </p>
            <div className="end-actions" style={{ justifyContent: "center" }}>
              <button
                className="reserve-button"
                onClick={() => alert("Thank you for your interest! RSVP form coming soon.")}
              >
                <span className="btn-icon">💌</span>
                Reserve Your Spot
              </button>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontFamily: "JetBrains Mono, monospace", fontSize: "0.75rem", marginTop: "1.5rem", letterSpacing: "2px" }}>
              SCROLL → TO EXPLORE MORE
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="story-page">
      <div className="slideshow-background">
        {storyChapters.map((chapter, index) => (
          <img key={index} src={chapter.photo} alt={chapter.title}
            className={`slide-image ${index === currentSlide ? "active" : ""}`} />
        ))}
        <div className={`slideshow-overlay ${currentChapter.type === "girl" ? "girl-overlay" : currentChapter.type === "boy" ? "boy-overlay" : "together-overlay"}`} />
      </div>

      <div className="story-nav">
        <button className="nav-btn prev-btn" onClick={handlePrevSlide} disabled={currentSlide === 0}>‹</button>
        <button className="nav-btn next-btn" onClick={handleNextSlide}>›</button>
      </div>

      <div className="skip-control">
        <button className="skip-btn" onClick={handleSkipToEnd}>
          <span className="skip-text">Skip to End</span>
          <span className="skip-icon">⏭</span>
        </button>
      </div>

      <div className="playback-control">
        <button className="playback-btn" onClick={() => setIsPaused(!isPaused)}>
          {isPaused ? "▶" : "⏸"}
        </button>
      </div>

      <div className="slide-counter">
        <span className="counter-current">{currentSlide + 1}</span>
        <span className="counter-separator">/</span>
        <span className="counter-total">{storyChapters.length}</span>
      </div>

      <div className="chapter-indicator">
        <div className={`chapter-badge ${currentChapter.type}`}>
          <span className="badge-icon">{currentChapter.icon}</span>
          <span className="badge-text">
            {currentChapter.type === "girl" ? "Her Story" : currentChapter.type === "boy" ? "His Story" : "Their Story"}
          </span>
        </div>
      </div>

      <div className="slide-content">
        <div className="slide-text visible" key={currentSlide}>
          <div className="slide-header">
            <span className="slide-number">Chapter {currentChapter.id}</span>
            <h2 className="slide-title">{currentChapter.title}</h2>
            <p className="slide-subtitle">{currentChapter.subtitle}</p>
          </div>
          <p className="slide-description">{currentChapter.description}</p>
          <div className="slide-hint">
            <span className="hint-text">Listen to our story</span>
            <span className="hint-icon">🎧</span>
          </div>
        </div>
      </div>

      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${((currentSlide + 1) / storyChapters.length) * 100}%` }} />
      </div>

      <div className="timeline-dots">
        {storyChapters.map((_, index) => (
          <button key={index}
            className={`timeline-dot ${index === currentSlide ? "active" : ""} ${storyChapters[index].type}`}
            onClick={() => setCurrentSlide(index)} />
        ))}
      </div>
    </div>
  );
};

export default StorySection;
