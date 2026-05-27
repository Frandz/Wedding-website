import React, { useState, useEffect, useRef } from "react";
import WeddingAttire from "../../assets/Wedding_Guest_Attire.png";
import CoreTeam from "../../assets/Bestwoman-MaidofHonor.png";
import Parents from "../../assets/Parents.png";
import PrincipalSponsors from "../../assets/Principal-Sponsors.png";
import Entourage from "../../assets/Entourage.png";
import SecondarySponsors from "../../assets/Secondary-Sponsors.png";
import Guests from "../../assets/Guests.png";
import "./EntourageSection.css";

// Each group maps to a CSS object-position slice of the attire illustration
const GROUPS = [
  {
    id: "core",
    tag: "CORE_TEAM.exe",
    title: "Best Man & Maid of Honor",
    imgSrc: CoreTeam,
    members: [
      { name: "Daniel Eclipse", role: "Best Man"},
      { name: "Judy lyn Lacno", role: "Maid of Honor" },
    ],
    accent: "#00ff41",
  },
  {
    id: "parents",
    tag: "PARENTS.dat",
    title: "Parents of the Couple",
    imgSrc: Parents,
    imgPos: "10% 5%",
    imgZoom: "250%",
    members: [
      { name: "Mother of the Groom", role: "Parent", icon: "👩" },
      { name: "Father of the Groom", role: "Parent", icon: "👨" },
      { name: "Mother of the Bride",  role: "Parent", icon: "👩" },
    ],
    accent: "#f8b195",
  },
  {
    id: "principals",
    tag: "PRINCIPAL_SPONSORS.sh",
    title: "Principal Sponsors",
    imgSrc: PrincipalSponsors,
    imgPos: "18% 88%",
    imgZoom: "240%",
    members: [
      { name: "Mr. Ben Cacayan",    role: "Ninong" },
      { name: "Ms. Monina Cacayan", role: "Ninang" },
      { name: "Mr. Kapitan",        role: "Ninong" },
      { name: "Ms. Sec",            role: "Ninang" },
      { name: "Mr. Abel Balboa",    role: "Ninong" },
      { name: "Ms. Gelyn Barrio",   role: "Ninang" },
      { name: "Mr. Larry",          role: "Ninong" },
      { name: "Ms. Liway",          role: "Ninang" },
    ],
    accent: "#f6d365",
  },
  {
    id: "secondary",
    tag: "SECONDARY_SPONSORS.cfg",
    title: "Secondary Sponsors",
    imgSrc: SecondarySponsors,
    imgPos: "50% 5%",
    imgZoom: "200%",
    members: [
      { name: "Mark Ian Tan & Raisa Mabazza",     role: "Candle" },
      { name: "Roy Abesamis & Veronica Fortades",   role: "Veil"   },
      { name: "Maria Ivan Francisco & Glaire Coria", role: "Cord"   },
    ],
    accent: "#c9b1ff",
  },
  {
    id: "entourage",
    tag: "ENTOURAGE.log",
    title: "Groomsmen & Bridesmaids",
    imgSrc: Entourage,
    imgPos: "80% 5%",
    imgZoom: "210%",
    members: [
      { name: "Ma. Ivan Francisco", role: "Groomsman", pair: "Raisa Mabazza",     pairRole: "Bridesmaid" },
      { name: "Mark Ian Tan",       role: "Groomsman", pair: "Veronica Fortades", pairRole: "Bridesmaid" },
      { name: "Eldon Galang",       role: "Groomsman", pair: "Glaire Aina Coria", pairRole: "Bridesmaid" },
      { name: "Hao Chen hsu",       role: "Groomsman", pair: "Gio Bagtas",        pairRole: "Bridesman" },
    ],
    accent: "#f28482",
  },
  {
    id: "guests",
    tag: "GUESTS.txt",
    title: "Guests",
    imgSrc: Guests,
    imgPos: "82% 88%",
    imgZoom: "230%",
    members: null,
    note: "Garden Formal · See Attire Guide for full dress code details.",
    accent: "#7D9B76",
  },
];

const CHARS = "アイウエオカキクケコ01アBCDEF";

const MatrixRain = () => {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener("resize", resize);
    const cols = Math.floor(canvas.width / 16);
    const drops = Array(cols).fill(1);
    const tick = setInterval(() => {
      ctx.fillStyle = "rgba(6,8,16,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(0,255,65,0.15)";
      ctx.font = "11px monospace";
      drops.forEach((y, i) => {
        ctx.fillText(CHARS[Math.floor(Math.random() * CHARS.length)], i * 16, y * 16);
        if (y * 16 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    }, 60);
    return () => { clearInterval(tick); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} className="ent-matrix" />;
};

const GroupCard = ({ group, index }) => {
  const [open, setOpen] = useState(true);
  const needsExpand = group.id === "principals" || group.id === "parents" || group.id === "secondary";

  return (
    <div
      className={`ent-card ${open ? "expanded" : ""}`}
      style={{ "--accent": group.accent, animationDelay: `${index * 0.1}s` }}
    >
      {/* Card image header */}
      <div className="ent-card-img-wrap">
        {group.imgSrc ? (
          <img
            src={group.imgSrc}
            alt={group.title}
            className="ent-card-img-direct"
          />
        ) : (
          <div
            className="ent-card-img"
            style={{
              backgroundImage: `url(${WeddingAttire})`,
              backgroundPosition: group.imgPos,
              backgroundSize: group.imgZoom,
            }}
          />
        )}
        <div className="ent-card-img-overlay" />
        <div className="ent-card-tag">
          <span className="tag-bracket">[</span>{group.tag}<span className="tag-bracket">]</span>
        </div>
      </div>

      {/* Card content */}
      <div className="ent-card-body">
        <h3 className="ent-card-title">{group.title}</h3>

        {/* Core team — avatars */}
        {group.id === "core" && (
          <div className="ent-core-list">
            {group.members.map((m, i) => (
              <div key={i} className="ent-avatar-row">
                <div className="ent-avatar">
                  {m.photo
                    ? <img src={m.photo} alt={m.name} />
                    : <span className="ent-avatar-initials">
                        {m.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                      </span>}
                </div>
                <div className="ent-avatar-info">
                  <span className="ent-av-role">{m.role}</span>
                  <span className="ent-av-name">{m.name}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Groomsmen/Bridesmaids — pairs */}
        {group.id === "entourage" && (
          <div className="ent-pairs-list">
            {group.members.map((m, i) => (
              <div key={i} className="ent-pair-row">
                <div className="ent-pair-col groom">
                  <span className="pair-role">🤵 {m.role}</span>
                  <span className="pair-name">{m.name}</span>
                </div>
                <span className="pair-sep">×</span>
                <div className="ent-pair-col bride">
                  <span className="pair-role">👰 {m.pairRole}</span>
                  <span className="pair-name">{m.pair}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Always-visible members list */}
        {needsExpand && (
          <div className={`ent-members-grid visible ${group.id === "secondary" ? "secondary-layout" : ""}`}>
            {group.members.map((m, i) => (
              <div key={i} className="ent-chip">
                <span className="chip-role">{m.role}</span>
                <span className="chip-name">{m.name}</span>
              </div>
            ))}
          </div>
        )}

        {/* Guests note */}
        {group.id === "guests" && (
          <p className="ent-guest-note">
            <span className="prompt-sym">›</span> {group.note}
          </p>
        )}
      </div>

      {/* bottom accent line */}
      <div className="ent-card-accent-bar" />
    </div>
  );
};

const EntourageSection = () => (
  <div className="entourage-section-wrap">
    <MatrixRain />
    <div className="ent-scanlines" />

    <span className="ent-corner tl"/><span className="ent-corner tr"/>
    <span className="ent-corner bl"/><span className="ent-corner br"/>

    <header className="ent-header">
      <div className="ent-header-tag">
        <span className="tag-dim">[</span>PROJECT: FOREVER<span className="tag-dim">]</span>
      </div>
      <h1 className="ent-header-title">
        <span className="ent-title-whimsy">The </span>
        <span className="ent-title-hacker">Entourage</span>
      </h1>
      <p className="ent-header-sub">
        <span className="prompt">$</span> git log --all --format="%an · %role"
      </p>
    </header>

    <div className="ent-grid">
      {GROUPS.map((g, i) => <GroupCard key={g.id} group={g} index={i} />)}
    </div>
  </div>
);

export default EntourageSection;
