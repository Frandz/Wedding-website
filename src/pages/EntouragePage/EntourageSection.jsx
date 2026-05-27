import React from "react";
import "../EntouragePage/EntouragePage.css";
import Bestman from "../../assets/Entourage/Bestman.jpeg";

const entourageData = {
  principals: {
    title: "Principal Sponsors",
    members: [
      { name: "Mr. Ben Cacayan",  role: "Ninong" },
      { name: "Ms. Monina Cacayan", role: "Ninang" },
      { name: "Mr. Kapitan",      role: "Ninong" },
      { name: "Ms. Sec",          role: "Ninang" },
      { name: "Mr. Abel Balboa",  role: "Ninong" },
      { name: "Ms. Gelyn Barrio", role: "Ninang" },
      { name: "Mr. Larry",        role: "Ninong" },
      { name: "Ms. Liway",        role: "Ninang" },
    ],
  },
  core: {
    title: "The Core Team",
    members: [
      { name: "Daniel Eclipse",  role: "Best Man",      icon: "👔", image: Bestman },
      { name: "Judy lyn Lacno",  role: "Maid of Honor", icon: "💐" },
    ],
  },
  secondary: {
    title: "Secondary Sponsors",
    items: [
      { role: "Candle", names: ["Mark Ian Tan", "Glaire Coria"] },
      { role: "Veil",   names: ["Roy Abesamis", "Judy Lyn Lacno"] },
      { role: "Cord",   names: ["Gio Bagtas", "Elyssa Mae Esteban"] },
    ],
  },
  execution: {
    title: "The Groomsmen & Bridesmaids",
    members: [
      { name: "Ma. Ivan Francisco", role: "Raisa Mabazza" },
      { name: "Mark Ian Tan",       role: "Veronica Fortades" },
      { name: "Roy Abesamis",       role: "Glaire Aina Coria" },
      { name: "Eldon Marc Galang",  role: "Mae Esteban" },
    ],
  },
};

const EntourageSection = () => {
  return (
    <div className="entourage-page">
      <div className="entourage-overlay" />
      {/* Back link removed — horizontal nav handles navigation */}

      <div className="entourage-container">
        <header className="entourage-header">
          <span className="tech-tag">PROJECT: FOREVER</span>
          <h1>The Entourage</h1>
          <p>The beautiful souls supporting our main branch.</p>
        </header>

        <main className="entourage-grid">
          <section className="entourage-section core-team">
            <h2 className="section-title">{entourageData.core.title}</h2>
            <div className="members-list">
              {entourageData.core.members.map((m, i) => (
                <div key={i} className={`member-card highlight ${m.role === "Best Man" ? "best-man" : ""}`}>
                  <div className="member-avatar">
                    {m.image
                      ? <img src={m.image} alt={m.name} className="member-image" />
                      : <span className="member-icon">{m.icon}</span>}
                  </div>
                  <div className="member-info">
                    <span className="member-role">{m.role}</span>
                    <span className="member-name">{m.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="entourage-section">
            <h2 className="section-title">{entourageData.principals.title}</h2>
            <div className="members-list simple">
              {entourageData.principals.members.map((m, i) => (
                <div key={i} className="member-item">
                  <span className="member-name">{m.name}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="entourage-section">
            <h2 className="section-title">{entourageData.secondary.title}</h2>
            <div className="secondary-grid">
              {entourageData.secondary.items.map((item, i) => (
                <div key={i} className="secondary-box">
                  <span className="secondary-role">{item.role}</span>
                  <p>{item.names.join(" & ")}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="entourage-section">
            <h2 className="section-title">{entourageData.execution.title}</h2>
            <div className="members-list wrap">
              {entourageData.execution.members.map((m, i) => (
                <div key={i} className="mini-card">
                  <span className="member-name">{m.name}</span>
                  <span className="mini-role">{m.role}</span>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default EntourageSection;
