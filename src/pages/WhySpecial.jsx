import React from "react";
import { useLanguage } from "../LanguageContext";
import "../styles/Sections.css";
import "../styles/Cards.css";

export default function WhySpecial() {
  const { t } = useLanguage();

  return (
    <section className="section section-alt" id="why">
      <div className="container">
        <h2>{t.why.title}</h2>
        <p className="section-intro">{t.why.intro}</p>

        <div className="cards">
          {t.why.cards.map((card) => (
            <div className="card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
