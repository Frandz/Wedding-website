import React, { useState, useEffect, useRef } from "react";
import WeddingAttire from "../../assets/Wedding_Guest_Attire.png";
import "./AttireSection.css";

const DRESS_RULES = [
  { icon: "✦", text: "Garden Formal attire required" },
  { icon: "✦", text: "Soft fabrics — chiffon, lace, tulle" },
  { icon: "✦", text: "Flowy dresses & linen suits welcome" },
  { icon: "✦", text: "Comfortable enough for warm weather" },
  { icon: "🚫", text: "Do NOT wear white or ivory", forbidden: true },
  { icon: "🚫", text: "Avoid overly casual attire", forbidden: true },
];

const TERMINAL_LINES = [
  "> LOADING dress_code.exe ...",
  "> DECRYPTING color_palette.dat ...",
  "> ACCESS GRANTED: attire_guide.png",
  "> STATUS: Garden Formal // FEB_02_2027",
];

const AttireSection = () => {
  const [decoded, setDecoded] = useState(false);
  const [termLine, setTermLine] = useState(0);
  const [typed, setTyped]     = useState("");
  const [imgLoaded, setImgLoaded] = useState(false);
  const canvasRef = useRef(null);

  // Terminal typing effect
  useEffect(() => {
    if (termLine >= TERMINAL_LINES.length) {
      setTimeout(() => setDecoded(true), 600);
      return;
    }
    const line = TERMINAL_LINES[termLine];
    let i = 0;
    setTyped("");
    const t = setInterval(() => {
      i++;
      setTyped(line.slice(0, i));
      if (i >= line.length) {
        clearInterval(t);
        setTimeout(() => setTermLine(n => n + 1), 300);
      }
    }, 28);
    return () => clearInterval(t);
  }, [termLine]);

  // Floating particles canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const particles = Array.from({ length: 38 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      vx: (Math.random() - 0.5) * 0.4,
      vy: -Math.random() * 0.6 - 0.2,
      alpha: Math.random(),
      color: Math.random() > 0.5 ? "#00ff41" : "#f6d365",
    }));

    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * 0.7;
        ctx.fill();
        p.x += p.vx; p.y += p.vy; p.alpha -= 0.003;
        if (p.alpha <= 0 || p.y < 0) {
          p.x = Math.random() * canvas.width;
          p.y = canvas.height + 5;
          p.alpha = Math.random() * 0.8 + 0.2;
          p.vy = -Math.random() * 0.6 - 0.2;
        }
      });
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="attire-section">
      {/* Particle canvas */}
      <canvas ref={canvasRef} className="attire-particles" />

      {/* Scanlines */}
      <div className="attire-scanlines" />

      {/* Corner decorations */}
      <span className="corner tl" /><span className="corner tr" />
      <span className="corner bl" /><span className="corner br" />

      {/* ── Header ── */}
      <header className="attire-hdr">
        <div className="attire-hdr-tag">
          <span className="tag-bracket">[</span>
          DRESS_CODE.exe
          <span className="tag-bracket">]</span>
        </div>
        <h1 className="attire-hdr-title">
          <span className="title-whimsy">Wedding</span>
          <span className="title-hacker"> Attire</span>
        </h1>
        <p className="attire-hdr-sub">
          <span className="prompt-sym">$</span> cat attire_guide.txt
        </p>
      </header>

      {/* ── Main content ── */}
      <div className="attire-body">

        {/* Terminal loader → reveals image */}
        <div className={`attire-terminal-wrap ${decoded ? "decoded" : ""}`}>
          {!decoded ? (
            <div className="attire-terminal">
              <div className="term-bar">
                <span className="tdot r"/><span className="tdot y"/><span className="tdot g"/>
                <span className="term-bar-title">attire_decrypt.sh</span>
              </div>
              <div className="term-body">
                {TERMINAL_LINES.slice(0, termLine).map((l, i) => (
                  <p key={i} className="term-line done">{l}</p>
                ))}
                {termLine < TERMINAL_LINES.length && (
                  <p className="term-line active">
                    {typed}<span className="term-cursor">█</span>
                  </p>
                )}
              </div>
            </div>
          ) : (
            <div className={`attire-img-frame ${imgLoaded ? "revealed" : ""}`}>
              <div className="img-frame-glow" />
              <div className="img-corner c1"/><div className="img-corner c2"/>
              <div className="img-corner c3"/><div className="img-corner c4"/>
              <img
                src={WeddingAttire}
                alt="Wedding Guest Attire Guide"
                className="attire-main-img"
                onLoad={() => setImgLoaded(true)}
              />
              <div className="img-caption">
                <span className="caption-sym">✦</span>
                ATTIRE_GUIDE_v2027 — ALL ROLES ILLUSTRATED
                <span className="caption-sym">✦</span>
              </div>
            </div>
          )}
        </div>

        {/* Rules panel */}
        <aside className="attire-rules">
          <div className="rules-header">
            <span className="rules-icon">⚙</span>
            <h2 className="rules-title">Dress Protocol</h2>
          </div>
          <ul className="rules-list">
            {DRESS_RULES.map((r, i) => (
              <li key={i} className={`rule-item ${r.forbidden ? "forbidden" : "allowed"}`}
                style={{ animationDelay: `${i * 0.1 + 0.3}s` }}>
                <span className="rule-icon">{r.icon}</span>
                <span className="rule-text">{r.text}</span>
              </li>
            ))}
          </ul>

          <div className="rules-divider">
            <span>// COLOR PALETTE</span>
          </div>

          <div className="rules-palette">
            <p className="palette-label">✨ Principal Sponsors</p>
            <div className="palette-swatches">
              {[
                { hex: "#F6D365", name: "Sunlit Gold" },
                { hex: "#E8B84B", name: "Honey Amber" },
                { hex: "#C8953A", name: "Burnished Gold" },
                { hex: "#A67C2E", name: "Antique Gold" },
              ].map((c, i) => (
                <div key={i} className="swatch-item">
                  <div className="swatch" style={{ background: c.hex }} />
                  <span className="swatch-name">{c.name}</span>
                </div>
              ))}
            </div>
            <p className="palette-label" style={{ marginTop: "0.6rem" }}>🌸 Guests</p>
            <div className="palette-swatches">
              {[
                { hex: "#C4837A", name: "Dusty Rose" },
                { hex: "#9E7B8C", name: "Mauve" },
                { hex: "#7D9B76", name: "Sage" },
                { hex: "#E8C4B8", name: "Blush" },
              ].map((c, i) => (
                <div key={i} className="swatch-item">
                  <div className="swatch" style={{ background: c.hex }} />
                  <span className="swatch-name">{c.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rules-stamp">
            <span className="stamp-inner">GARDEN<br/>FORMAL</span>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default AttireSection;
