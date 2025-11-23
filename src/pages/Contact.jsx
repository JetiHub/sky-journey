import React, { useState } from "react";
import { useLanguage } from "../LanguageContext";
import "../styles/Sections.css";
import "../styles/Buttons.css";
import "../styles/Contact.css";

export default function Contact() {
  const { t, lang } = useLanguage();

  // form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    dates: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "996755117511";

    const text =
      `Hello! I want to book a tour with Sky Journey.%0A%0A` +
      `Name: ${form.name}%0A` +
      `Email: ${form.email}%0A` +
      `Phone / WhatsApp: ${form.phone}%0A` +
      `Preferred dates: ${form.dates}%0A%0A` +
      `Message:%0A${form.message}`;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(url, "_blank");
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
                value={form.name}
                onChange={handleChange}
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
                value={form.email}
                onChange={handleChange}
              />
            </label>

            <label>
              {t.contact.fields.phone}
              <input
                type="text"
                name="phone"
                placeholder={t.contact.fields.phonePlaceholder}
                value={form.phone}
                onChange={handleChange}
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
                value={form.dates}
                onChange={handleChange}
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
                value={form.message}
                onChange={handleChange}
              />
            </label>
          </div>

          <button type="submit" className="btn btn-primary btn-full">
            {t.contact.button}
          </button>

          {/* WhatsApp note */}
          <p className="whatsapp-note">
            {lang === "en"
              ? "After clicking, WhatsApp will open with your message."
              : "После нажатия откроется WhatsApp с вашим сообщением."}
          </p>
        </form>
      </div>
    </section>
  );
}
