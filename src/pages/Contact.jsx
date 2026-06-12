import React, { useState } from 'react';
import styles from './Contact.module.css';
import { CONTACT_EMAIL, ADDRESS, CONTACT_PERSONS, WHATSAPP_NUMBER } from '../config/site';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for reaching out! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={styles.contact}>
      <div className={styles.header}>
        <div className={styles.container}>
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.form}>
            <h2>Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <textarea
                placeholder="Your Message"
                rows="6"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
              <button type="submit" className={styles.submitBtn}>Send Message</button>
            </form>
          </div>

          <div className={styles.info}>
            <h2>Get in Touch</h2>
            <div className={styles.infoItem}>
              <h3>📍 Address</h3>
              <p>{ADDRESS.full}</p>
            </div>
            <div className={styles.infoItem}>
              <h3>📞 Phone</h3>
              <p>
                <a href={`tel:${(CONTACT_PERSONS?.[0]?.phone || WHATSAPP_NUMBER || '').replace(/\s+/g, '')}`}>
                  {CONTACT_PERSONS?.[0]?.phone || WHATSAPP_NUMBER || ''}
                </a>
              </p>
            </div>
            <div className={styles.infoItem}>
              <h3>📧 Email</h3>
              <p>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </p>
            </div>
            <div className={styles.infoItem}>
              <h3>🕒 Hours</h3>
              <p>Mon - Fri: 9:00 AM - 6:00 PM<br/>Sat - Sun: 10:00 AM - 4:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
