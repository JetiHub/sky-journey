import React from "react";
import { useLanguage } from "../LanguageContext";
import "../styles/Sections.css";
import "../styles/Buttons.css";
import "../styles/Contact.css";

export default function Contact() {
  const { t } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(t.contact.alert);
  };

  return (
    <section className="section" id="contact">
      <div className="container two-col contact">
        <div>
          <h2>{t.contact.title}</h2>
          <p>{t.contact.paragraph}</p>
          <ul className="list">
            {t.contact.bullets.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label>
              {t.contact.fields.name}
              <input
                type="text"
                name="name"
                required
                placeholder={t.contact.fields.namePlaceholder}
              />
            </label>
          </div>

          <div className="form-row two">
            <label>
              {t.contact.fields.email}
              <input
                type="email"
                name="email"
                required
                placeholder={t.contact.fields.emailPlaceholder}
              />
            </label>

            <label>
              {t.contact.fields.phone}
              <input
                type="text"
                name="phone"
                placeholder={t.contact.fields.phonePlaceholder}
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              {t.contact.fields.dates}
              <input
                type="text"
                name="dates"
                placeholder={t.contact.fields.datesPlaceholder}
              />
            </label>
          </div>

          <div className="form-row">
            <label>
              {t.contact.fields.message}
              <textarea
                name="message"
                rows="4"
                placeholder={t.contact.fields.messagePlaceholder}
              ></textarea>
            </label>
          </div>

          <button type="submit" className="btn btn-primary btn-full">
            {t.contact.button}
          </button>
        </form>
      </div>
    </section>
  );
}
