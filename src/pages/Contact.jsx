import React, { useState } from 'react';
import styles from './Contact.module.css';
import { CONTACT_EMAIL, ADDRESS, CONTACT_PERSONS, WHATSAPP_NUMBER, SITE_NAME } from '../config/site';

const FAQS = [
  {
    q: 'Do I need to renovate my home for a Vastu correction?',
    a: 'Not always. Many imbalances can be corrected with simple remedies — placement of objects, colour, mirrors, or light — without breaking a single wall. Structural change is only suggested when there is no other way to correct a serious flaw.',
  },
  {
    q: 'Can Vastu be applied to a flat or rented apartment?',
    a: 'Yes. Vastu principles apply to any space you live or work in, regardless of ownership. We tailor every consultation to what you can actually modify, especially in rented or society-managed properties.',
  },
  {
    q: 'Do you visit the site, or is this done remotely?',
    a: 'Both are available. We offer in-person site visits across Delhi NCR, and detailed remote consultations (video call plus floor plan review) for clients anywhere in India or abroad.',
  },
  {
    q: 'How soon can I get an appointment?',
    a: 'We typically respond within 24 hours on WhatsApp or phone. Site visits are usually scheduled within a week, depending on location and season.',
  },
];

const REASONS = [
  {
    icon: '🏠',
    title: 'Residential consultations',
    desc: 'New homes, existing flats, and renovations — entrance, kitchen, bedroom, and pooja room placement.',
  },
  {
    icon: '🏢',
    title: 'Commercial & office Vastu',
    desc: 'Shops, offices, factories, and clinics, reviewed for energy flow, cash counter and seating placement.',
  },
  {
    icon: '📐',
    title: 'Pre-construction planning',
    desc: 'Floor plan review before you build, so the layout is right from the foundation up.',
  },
  {
    icon: '🔮',
    title: 'Remedial guidance',
    desc: 'Practical, non-structural remedies for spaces that can\u2019t be rebuilt or altered.',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', propertyType: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setSubmitted(true);
    setFormData({ name: '', phone: '', propertyType: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const primaryContact = CONTACT_PERSONS?.[0];
  const whatsappDigits = (primaryContact?.whatsapp || WHATSAPP_NUMBER || '').replace(/\D/g, '');

  return (
    <div className={styles.contact}>
      <div className={styles.header}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Get in touch</span>
          <h1>Let&rsquo;s bring balance to your space</h1>
          <p className={styles.headerSub}>
            Whether you&rsquo;re building, buying, or simply feel something is off in your home or
            office, {SITE_NAME} is here to help. Tell us about your space and we&rsquo;ll guide you
            from there.
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.reasonsGrid}>
          {REASONS.map((r) => (
            <div className={styles.reasonCard} key={r.title}>
              <span className={styles.reasonIcon} aria-hidden="true">{r.icon}</span>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </div>
          ))}
        </div>

        <div className={styles.content}>
          <div className={styles.form}>
            <h2>Send us a message</h2>
            <p className={styles.formIntro}>
              Share a few details about your property and what&rsquo;s on your mind. We read every
              message personally and reply within a day.
            </p>
            {submitted && (
              <div className={styles.successBanner} role="status">
                Thank you for reaching out! We&rsquo;ll get back to you soon.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <input
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                />
              </div>
              <select
                value={formData.propertyType}
                onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                required
              >
                <option value="" disabled>What kind of space is this about?</option>
                <option value="residential">Residential — home or flat</option>
                <option value="commercial">Commercial — office or shop</option>
                <option value="pre-construction">Pre-construction / new build</option>
                <option value="other">Something else</option>
              </select>
              <textarea
                placeholder="Tell us a little about your space and what's prompting the consultation"
                rows="6"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
              <button type="submit" className={styles.submitBtn}>Send message</button>
            </form>
          </div>

          <div className={styles.info}>
            <h2>Reach us directly</h2>
            <p className={styles.infoIntro}>
              Prefer to talk it through? Call or message us on WhatsApp — most consultations start
              with a short conversation about your space before any visit is scheduled.
            </p>

            <div className={styles.infoItem}>
              <h3>📍 Address</h3>
              <p>{ADDRESS.full}</p>
            </div>

            <div className={styles.infoItem}>
              <h3>📧 Email</h3>
              <p>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </p>
            </div>

            <div className={styles.infoItem}>
              <h3>🕒 Hours</h3>
              <p>Mon &ndash; Fri: 9:00 AM &ndash; 6:00 PM<br/>Sat &ndash; Sun: 10:00 AM &ndash; 4:00 PM</p>
            </div>

            <div className={styles.infoItem}>
              <h3>💬 WhatsApp</h3>
              {whatsappDigits && (
                <a
                  className={styles.whatsappBtn}
                  href={`https://wa.me/${whatsappDigits}?text=${encodeURIComponent(
                    `Hi, I'd like to enquire about a Vastu consultation.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              )}
            </div>

            <div className={styles.team}>
              <h3>Speak with our team</h3>
              {CONTACT_PERSONS?.map((person) => (
                <div className={styles.teamMember} key={person.name}>
                  <div>
                    <p className={styles.teamName}>{person.name}</p>
                    <a href={`tel:${person.phone.replace(/\s+/g, '')}`} className={styles.teamPhone}>
                      {person.phone}
                    </a>
                  </div>
                  {person.whatsapp && (
                    <a
                      className={styles.teamWhatsapp}
                      href={`https://wa.me/${person.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Message ${person.name} on WhatsApp`}
                    >
                      WhatsApp
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.faqSection}>
          <h2>Common questions</h2>
          <div className={styles.faqList}>
            {FAQS.map((item, idx) => (
              <div className={styles.faqItem} key={item.q}>
                <button
                  className={styles.faqQuestion}
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  aria-expanded={openFaq === idx}
                >
                  <span>{item.q}</span>
                  <span className={styles.faqToggle}>{openFaq === idx ? '\u2212' : '+'}</span>
                </button>
                {openFaq === idx && <p className={styles.faqAnswer}>{item.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;