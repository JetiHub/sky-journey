import React from "react";
import { useLanguage } from "../LanguageContext";
import "../styles/Sections.css";
import "../styles/Itinerary.css";

export default function Itinerary() {
  const { t } = useLanguage();

  return (
    <section className="section section-alt" id="itinerary">
      <div className="container">
        <h2>{t.itinerary.title}</h2>
        <p className="section-intro">{t.itinerary.intro}</p>

        <div className="timeline">
          {t.itinerary.days.map((d) => (
            <Day key={d.day} day={d.day} title={d.title} text={d.text} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Day({ day, title, text }) {
  return (
    <div className="day">
      <div className="day-marker" />
      <div className="day-content">
        <div className="day-header">
          <span className="day-label">{day}</span>
          <h3 className="day-title">{title}</h3>
        </div>
        <p>{text}</p>
      </div>
    </div>
  );
}
