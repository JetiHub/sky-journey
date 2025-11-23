import React from "react";
import { useLanguage } from "../LanguageContext";
import "../styles/Sections.css";

export default function Inclusions() {
  const { t } = useLanguage();

  return (
    <section className="section" id="inclusions">
      <div className="container two-col">
        <div>
          <h2>{t.inclusions.titleIncluded}</h2>
          <ul className="list">
            {t.inclusions.includedItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <h2>{t.inclusions.titleNotIncluded}</h2>
          <ul className="list list-muted">
            {t.inclusions.notIncludedItems.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="note">{t.inclusions.note}</p>
        </div>
      </div>
    </section>
  );
}
