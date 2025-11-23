import React from "react";
import { useLanguage } from "../LanguageContext";
import "../styles/Sections.css";

export default function WhatToBring() {
  const { t } = useLanguage();

  return (
    <section className="section">
      <div className="container two-col">
        <div>
          <h2>{t.bring.title}</h2>
          <p>{t.bring.paragraph}</p>
          <ul className="list">
            {t.bring.essentials.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="info-panel">
          <h3>{t.bring.smallTitle}</h3>
          <ul className="list">
            {t.bring.smallItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
