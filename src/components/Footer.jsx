import React from "react";
import { useLanguage } from "../LanguageContext";
import "../styles/Footer.css"; // ✅ new css file for footer

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        {/* LEFT SIDE */}
        <div className="footer-left">
          © {new Date().getFullYear()} Sky Journey
        </div>

        {/* RIGHT SIDE */}
        <div className="footer-right">
          <span>{t.footer.location}</span>
          <span className="jeti-badge">Developed and powerd by JetiHub</span>
        </div>
      </div>
    </footer>
  );
}
