import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./VenuePage.css";
import Emerald1 from "../../assets/Venue/Emerald1.jpg";
import Emerald2 from "../../assets/Venue/Emerald2.jpg";
import Emerald3 from "../../assets/Venue/Emerald3.jpg";

const VenuePage = () => {
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
      {/* Background */}
      <div className="venue-background">
        <div className="gradient-overlay"></div>
      </div>

      {/* Header */}
      <div className="venue-header">
        <Link to="/story" className="back-link">
          <span className="back-arrow">←</span>
          Back to Story
        </Link>
        <h1 className="venue-title">Venue</h1>
        <p className="venue-subtitle">Where Magic Happens</p>
      </div>

      {/* Main Content */}
      <div className="venue-content">
        {/* Venue Hero */}
        <div className="venue-hero">
          <div className="venue-image-container">
            {venueImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Venue view ${index + 1}`}
                className={`venue-slide ${index === currentIdx ? "active" : ""}`}
              />
            ))}
            {/* Dots Overlay */}
            <div className="slide-dots">
              {venueImages.map((_, i) => (
                <div
                  key={i}
                  className={`dot ${i === currentIdx ? "active" : ""}`}
                />
              ))}
            </div>
          </div>
          <div className="venue-hero-info">
            <h2 className="venue-name">The Emerald Event Place Antipolo</h2>
            <p className="venue-tagline">Where Technology Meets Nature</p>
          </div>
        </div>

        {/* Venue Details */}
        <div className="venue-details">
          <div className="detail-section">
            <h3 className="section-title">
              <span className="section-icon">📍</span>
              Location
            </h3>
            <p className="section-text">
              H598+R3G, Cabrera Rd,
              <br />
              Antipolo,
              <br />
              1870 Rizal
            </p>
            <a
              href="https://www.google.com/maps/place/The+Emerald+Events+Place/@14.5695677,121.1626356,17z/data=!4m14!1m7!3m6!1s0x3397c7fb8fce5735:0xc84901512d88bd1e!2sThe+Emerald+Events+Place!8m2!3d14.5695677!4d121.1652105!16s%2Fg%2F11fk4pkzsv!3m5!1s0x3397c7fb8fce5735:0xc84901512d88bd1e!8m2!3d14.5695677!4d121.1652105!16s%2Fg%2F11fk4pkzsv?entry=ttu&g_ep=EgoyMDI2MDQwMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="map-link"
            >
              <span className="link-icon">🗺️</span>
              View on Google Maps
            </a>
          </div>

          <div className="detail-section developer-card">
            <h3 className="section-title">
              <span className="section-icon">{"</>"}</span>
              Event_Runtime.sh
            </h3>

            <div className="timeline-container">
              {/* The actual "Map Line" */}
              <div className="timeline-line"></div>

              <div className="schedule-item">
                <div className="timeline-dot">
                  <span>01</span>
                </div>
                <div className="schedule-content">
                  <span className="schedule-time">3:30 PM</span>
                  <span className="schedule-event">
                    <span className="icon">🚗</span> Guest Arrival
                  </span>
                </div>
              </div>

              <div className="schedule-item">
                <div className="timeline-dot">
                  <span>02</span>
                </div>
                <div className="schedule-content">
                  <span className="schedule-time">4:00 PM</span>
                  <span className="schedule-event">
                    <span className="icon">💍</span> Ceremony Begins
                  </span>
                </div>
              </div>

              <div className="schedule-item">
                <div className="timeline-dot">
                  <span>03</span>
                </div>
                <div className="schedule-content">
                  <span className="schedule-time">5:00 PM</span>
                  <span className="schedule-event">
                    <span className="icon">🍸</span> Cocktail Hour
                  </span>
                </div>
              </div>

              <div className="schedule-item">
                <div className="timeline-dot active-node">
                  <span>04</span>
                </div>
                <div className="schedule-content">
                  <span className="schedule-time">6:00 PM</span>
                  <span className="schedule-event">
                    <span className="icon">🍽️</span> Reception & Dinner
                  </span>
                </div>
              </div>

              <div className="schedule-item">
                <div className="timeline-dot">
                  <span>05</span>
                </div>
                <div className="schedule-content">
                  <span className="schedule-time">9:00 PM</span>
                  <span className="schedule-event">
                    <span className="icon">✨</span> Send-Off
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="detail-section">
            <h3 className="section-title">
              <span className="section-icon">🚗</span>
              Getting There
            </h3>
            <p className="section-text">
              <strong>By Car:</strong> Free parking available on-site.
              <br />
              <br />
              <strong>By Ride-Share:</strong> Designated drop-off/pick-up area
              at main entrance.
            </p>
          </div>

          <div className="detail-section">
            <h3 className="section-title">
              <span className="section-icon">ℹ️</span>
              Important Information
            </h3>
            <ul className="info-list">
              <li>Ceremony will be outdoors - dress accordingly</li>
              <li>Indoor backup available in case of inclement weather</li>
              <li>Photography welcome during reception</li>
              <li>Unplugged ceremony - please silence phones</li>
            </ul>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="venue-map">
          <div className="map-placeholder">
            <span className="map-icon">🗺️</span>
            <span className="map-text">Interactive Map</span>
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="map-button"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="venue-footer">
        <Link to="/attire" className="footer-btn attire-btn">
          <span className="btn-icon">👗</span>
          View Attire
        </Link>
        <Link to="/faq" className="footer-btn faq-btn">
          <span className="btn-icon">❓</span>
          FAQ
        </Link>
      </div>
    </div>
  );
};

export default VenuePage;
