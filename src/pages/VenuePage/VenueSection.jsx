import React, { useState, useEffect } from "react";
import "../VenuePage/VenuePage.css";
import Emerald1 from "../../assets/Venue/Emerald1.jpg";
import Emerald2 from "../../assets/Venue/Emerald2.jpg";
import Emerald3 from "../../assets/Venue/Emerald3.jpg";

const VenueSection = () => {
  const venueImages = [Emerald1, Emerald2, Emerald3];
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % venueImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [venueImages.length]);

  return (
    <div className="venue-page">
      <div className="venue-background">
        <div className="gradient-overlay"></div>
      </div>

      {/* Back link removed — horizontal nav handles navigation */}
      <div className="venue-header">
        <h1 className="venue-title">Venue</h1>
        <p className="venue-subtitle">Where Magic Happens</p>
      </div>

      <div className="venue-content">
        <div className="venue-hero">
          <div className="venue-image-container">
            {venueImages.map((img, index) => (
              <img key={index} src={img} alt={`Venue view ${index + 1}`}
                className={`venue-slide ${index === currentIdx ? "active" : ""}`} />
            ))}
            <div className="slide-dots">
              {venueImages.map((_, i) => (
                <div key={i} className={`dot ${i === currentIdx ? "active" : ""}`} />
              ))}
            </div>
          </div>
          <div className="venue-hero-info">
            <h2 className="venue-name">The Emerald Event Place Antipolo</h2>
            <p className="venue-tagline">Where Technology Meets Nature</p>
          </div>
        </div>

        <div className="venue-details">
          <div className="detail-section">
            <h3 className="section-title">
              <span className="section-icon">📍</span>Location
            </h3>
            <p className="section-text">
              H598+R3G, Cabrera Rd,<br />Antipolo,<br />1870 Rizal
            </p>
            <a href="https://www.google.com/maps/place/The+Emerald+Events+Place/@14.5695677,121.1626356,17z"
              target="_blank" rel="noopener noreferrer" className="map-link">
              <span className="link-icon">🗺️</span>View on Google Maps
            </a>
          </div>

          <div className="detail-section developer-card">
            <h3 className="section-title">
              <span className="section-icon">{"</>"}</span>Event_Runtime.sh
            </h3>
            <div className="timeline-container">
              <div className="timeline-line"></div>
              {[
                { n: "01", time: "3:30 PM", icon: "🚗", event: "Guest Arrival" },
                { n: "02", time: "4:00 PM", icon: "💍", event: "Ceremony Begins" },
                { n: "03", time: "5:00 PM", icon: "🍸", event: "Cocktail Hour" },
                { n: "04", time: "6:00 PM", icon: "🍽️", event: "Reception & Dinner", active: true },
                { n: "05", time: "9:00 PM", icon: "✨", event: "Send-Off" },
              ].map((s) => (
                <div key={s.n} className="schedule-item">
                  <div className={`timeline-dot ${s.active ? "active-node" : ""}`}><span>{s.n}</span></div>
                  <div className="schedule-content">
                    <span className="schedule-time">{s.time}</span>
                    <span className="schedule-event"><span className="icon">{s.icon}</span> {s.event}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="detail-section">
            <h3 className="section-title">
              <span className="section-icon">🚗</span>Getting There
            </h3>
            <p className="section-text">
              <strong>By Car:</strong> Free parking available on-site.<br /><br />
              <strong>By Ride-Share:</strong> Designated drop-off/pick-up area at main entrance.
            </p>
          </div>

          <div className="detail-section">
            <h3 className="section-title">
              <span className="section-icon">ℹ️</span>Important Information
            </h3>
            <ul className="info-list">
              <li>Ceremony will be outdoors - dress accordingly</li>
              <li>Indoor backup available in case of inclement weather</li>
              <li>Photography welcome during reception</li>
              <li>Unplugged ceremony - please silence phones</li>
            </ul>
          </div>
        </div>

        <div className="venue-map">
          <div className="map-placeholder">
            <span className="map-icon">🗺️</span>
            <span className="map-text">Interactive Map</span>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="map-button">
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>
      {/* Footer nav buttons removed */}
    </div>
  );
};

export default VenueSection;
