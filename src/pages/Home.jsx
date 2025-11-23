import React from "react";
import { useLanguage } from "../LanguageContext";
import { NavLink } from "react-router-dom";
import "../styles/Hero.css";
import "../styles/Buttons.css";
import "../styles/Sections.css";

export default function Home() {
  return (
    <>
      <Hero />
      <TourOverview />
    </>
  );
}

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero" id="tour">
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-badge">{t.hero.badge}</div>
        <h1 className="hero-title">
          {t.hero.titleLine1}
          <br />
          {t.hero.titleLine2}
        </h1>
        <p className="hero-subtitle">{t.hero.subtitle}</p>

        <div className="hero-actions">
          <NavLink to="/itinerary" className="btn btn-primary">
            {t.hero.btnItinerary}
          </NavLink>
          <NavLink to="/contact" className="btn btn-outline">
            {t.hero.btnQuote}
          </NavLink>
        </div>

        <div className="hero-stats">
          <Stat label={t.hero.statDurationLabel} value={t.hero.statDurationValue} />
          <Stat label={t.hero.statDestinationsLabel} value={t.hero.statDestinationsValue} />
          <Stat label={t.hero.statHighlightsLabel} value={t.hero.statHighlightsValue} />
        </div>
      </div>
    </section>
  );
}

function Stat({ label, value }) {
  return (
    <div className="stat">
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
    </div>
  );
}

function TourOverview() {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="container two-col">
        <div>
          <h2>{t.overview.title}</h2>
          <p>{t.overview.paragraph}</p>
          <ul className="list">
            {t.overview.points.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="info-panel">
          <h3>{t.overview.snapshotTitle}</h3>
          <ul className="info-list">
            {t.overview.snapshot.map((row) => (
              <li key={row.label}>
                <span>{row.label}</span>
                <span>{row.value}</span>
              </li>
            ))}
          </ul>
          <p className="note">{t.overview.note}</p>
        </div>
      </div>
    </section>
  );
}
