import React, { useState, useRef, useEffect } from "react";
import StorySection from "../StoryPage/StorySection";
import AttireSection from "../AttirePage/AttireSection";
import EntourageSection from "../EntouragePage/EntourageSection";
import VenueSection from "../VenuePage/VenueSection";
import FAQSection from "../FAQPage/FAQSection";
import "./MainPage.css";

const SECTIONS = [
  { id: "story",     label: "💒 Story",     icon: "💒" },
  { id: "attire",    label: "👗 Attire",    icon: "👗" },
  { id: "entourage", label: "✨ Entourage", icon: "✨" },
  { id: "venue",     label: "📍 Venue",     icon: "📍" },
  { id: "faq",       label: "❓ FAQ",       icon: "❓" },
];

const MainPage = () => {
  const [activeSection, setActiveSection] = useState(0);
  const scrollRef = useRef(null);
  const sectionRefs = useRef([]);

  // Scroll to section when nav dot clicked
  const scrollToSection = (index) => {
    const el = sectionRefs.current[index];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
    }
    setActiveSection(index);
  };

  // Track which section is visible via IntersectionObserver
  useEffect(() => {
    const observers = sectionRefs.current.map((el, i) => {
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(i);
        },
        { root: scrollRef.current, threshold: 0.5 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o && o.disconnect());
  }, []);

  return (
    <div className="main-page">
      {/* Horizontal scroll track */}
      <div className="h-scroll-track" ref={scrollRef}>
        {SECTIONS.map((sec, i) => (
          <div
            key={sec.id}
            className="h-scroll-panel"
            ref={(el) => (sectionRefs.current[i] = el)}
          >
            {sec.id === "story"     && <StorySection />}
            {sec.id === "attire"    && <AttireSection />}
            {sec.id === "entourage" && <EntourageSection />}
            {sec.id === "venue"     && <VenueSection />}
            {sec.id === "faq"       && <FAQSection />}
          </div>
        ))}
      </div>

      {/* Section nav dots */}
      <nav className="section-nav">
        {SECTIONS.map((sec, i) => (
          <button
            key={sec.id}
            className={`nav-dot ${activeSection === i ? "active" : ""}`}
            onClick={() => scrollToSection(i)}
            title={sec.label}
          >
            <span className="nav-dot-icon">{sec.icon}</span>
            <span className="nav-dot-label">{sec.label.split(" ")[1]}</span>
          </button>
        ))}
      </nav>

      {/* Prev / Next arrows */}
      <button
        className="scroll-arrow scroll-arrow--left"
        onClick={() => scrollToSection(Math.max(0, activeSection - 1))}
        disabled={activeSection === 0}
      >‹</button>
      <button
        className="scroll-arrow scroll-arrow--right"
        onClick={() => scrollToSection(Math.min(SECTIONS.length - 1, activeSection + 1))}
        disabled={activeSection === SECTIONS.length - 1}
      >›</button>
    </div>
  );
};

export default MainPage;
