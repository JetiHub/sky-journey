import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import "../styles/Navbar.css";

export default function Navbar() {
  const { t, lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  const toggleLanguage = () => {
    setLang(lang === "en" ? "ru" : "en");
  };

  const closeMenu = () => setOpen(false);

  return (
    <header className="header">
      <div className="container header-inner">
        {/* LOGO */}
        <div className="logo">
          <NavLink to="/" className="logo-link" onClick={closeMenu}>
            <img
              src="/BigLogo.png"
              alt="Sky Journey logo"
              className="logo-image"
            />
          </NavLink>
        </div>

        {/* Desktop nav */}
        <nav className="nav">
          <NavLink to="/">{t.nav.tour}</NavLink>
          <NavLink to="/itinerary">{t.nav.itinerary}</NavLink>
          <NavLink to="/inclusions">{t.nav.inclusions}</NavLink>
          <NavLink to="/why">{t.nav.why}</NavLink>
          <NavLink to="/contact" className="nav-cta">
            {t.nav.contact}
          </NavLink>
        </nav>

        {/* Right side */}
        <div className="header-actions">
          <button
            type="button"
            className="lang-toggle"
            onClick={toggleLanguage}
          >
            {lang === "en" ? "RU" : "EN"}
          </button>

          <button
            type="button"
            className={`menu-toggle ${open ? "is-open" : ""}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="nav-mobile">
          <NavLink to="/" onClick={closeMenu}>
            {t.nav.tour}
          </NavLink>
          <NavLink to="/itinerary" onClick={closeMenu}>
            {t.nav.itinerary}
          </NavLink>
          <NavLink to="/inclusions" onClick={closeMenu}>
            {t.nav.inclusions}
          </NavLink>
          <NavLink to="/why" onClick={closeMenu}>
            {t.nav.why}
          </NavLink>
          <NavLink to="/contact" className="nav-cta-mobile" onClick={closeMenu}>
            {t.nav.contact}
          </NavLink>
        </nav>
      )}
    </header>
  );
}
