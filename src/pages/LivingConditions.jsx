import React from "react";
import { useLanguage } from "../LanguageContext";
import "../styles/Sections.css";

export default function LivingConditions() {
  const { t } = useLanguage();

  return (
    <section className="section section-alt">
      <div className="container two-col">
        <div>
          <h2>{t.living.title}</h2>
          <h3 className="subheading">{t.living.hotelsTitle}</h3>
          <p>{t.living.hotelsParagraph}</p>
          <ul className="list">
            {t.living.hotelsList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="subheading">{t.living.mealsTitle}</h3>
          <p>{t.living.mealsParagraph}</p>
          <ul className="list">
            {t.living.mealsList.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
