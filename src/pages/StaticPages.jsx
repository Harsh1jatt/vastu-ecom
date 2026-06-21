import React, { useState } from 'react';
import styles from './StaticPages.module.css';
import { SITE_NAME, SITE_URL, CONTACT_EMAIL, CONTACT_PERSONS, WHATSAPP_NUMBER, ADDRESS } from '../config/site';

const primaryContact = CONTACT_PERSONS?.[0];
const whatsappDigits = (primaryContact?.whatsapp || WHATSAPP_NUMBER || '').replace(/\D/g, '');
const whatsappLink = (text) =>
  `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(text)}`;

export const Blogs = () => (
  <div className={styles.page}>
    <div className={styles.header}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>Reading room</span>
        <h1>The {SITE_NAME} journal</h1>
        <p className={styles.headerSub}>
          Notes on Vastu Shastra, energy correction, and practical fixes for everyday homes &mdash;
          written for people who want to understand the why, not just follow instructions.
        </p>
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.comingSoon}>
          <h2>We&rsquo;re building this section</h2>
          <p>
            We&rsquo;re putting together articles on entrance direction, kitchen placement, common
            myths about Vastu, and how to choose the right remedy for your space. Check back soon,
            or if you have a specific question you&rsquo;d like answered in the meantime, reach out
            directly and we&rsquo;ll point you in the right direction.
          </p>
          <a className={styles.primaryBtn} href={whatsappLink("Hi, I have a question I'd like answered before your blog launches.")} target="_blank" rel="noopener noreferrer">
            Ask us a question
          </a>
        </div>

        <div className={styles.topicGrid}>
          <div className={styles.topicCard}>
            <h3>Vastu Shastra basics</h3>
            <p>Directions, elements, and the principles behind why placement matters.</p>
          </div>
          <div className={styles.topicCard}>
            <h3>Room-by-room guidance</h3>
            <p>Entrance, kitchen, bedroom, and pooja room &mdash; what to get right and why.</p>
          </div>
          <div className={styles.topicCard}>
            <h3>Remedies explained</h3>
            <p>What each product or correction actually does, and when it&rsquo;s appropriate.</p>
          </div>
          <div className={styles.topicCard}>
            <h3>Myths &amp; misconceptions</h3>
            <p>Separating genuine Vastu principles from superstition and sales tactics.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FAQ_ITEMS = [
  {
    q: 'How do I book a Vastu consultation?',
    a: 'Call or message us on WhatsApp with your location and the type of property (home, office, or under-construction site). We\u2019ll confirm whether the visit can be in person or done remotely using your floor plan and photographs, and schedule a time that works for you.',
  },
  {
    q: 'How do I order a Vastu product?',
    a: 'You can order directly through WhatsApp or by phone. Tell us the product you need, or describe the issue you\u2019re trying to correct, and we\u2019ll recommend the right item, confirm the price, and arrange payment and delivery.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept UPI, bank transfer, and major payment apps. Payment details are shared once your order or consultation is confirmed.',
  },
  {
    q: 'What is your shipping policy?',
    a: 'Products are shipped across India once payment is confirmed. Delivery timelines depend on the item and your location, and tracking details are shared as soon as your order is dispatched.',
  },
  {
    q: 'Can I return a product after purchase?',
    a: 'No. All Vastu products are sold on a no-return, no-refund basis once the sale is confirmed, since each item is sourced and, in many cases, energised specifically for the order. We recommend confirming the right product with us on a call before ordering, so there\u2019s no doubt about fit.',
  },
  {
    q: 'What if a product arrives damaged or incorrect?',
    a: 'That\u2019s the one exception we make. If a product arrives visibly damaged in transit or doesn\u2019t match what you ordered, contact us within 48 hours of delivery with photographs and we\u2019ll arrange a replacement.',
  },
  {
    q: 'Are your products authentic and energised correctly?',
    a: 'Yes. Every product is sourced from trusted suppliers and prepared according to traditional Vastu and Shastric guidelines before it reaches you.',
  },
  {
    q: 'Do you offer remote consultations for clients outside Delhi?',
    a: 'Yes. We work with clients across India and abroad through video calls and a detailed floor plan review. Site visits are offered in person across Delhi NCR.',
  },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Help center</span>
          <h1>Frequently asked questions</h1>
          <p className={styles.headerSub}>
            Answers to what clients ask us most before booking a consultation or ordering a
            product. Can&rsquo;t find what you need? Reach out directly.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.content}>
          {FAQ_ITEMS.map((item, idx) => (
            <div className={styles.faqItem} key={item.q}>
              <button
                className={styles.faqQuestion}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                <span>{item.q}</span>
                <span className={styles.faqToggle}>{openIndex === idx ? '\u2212' : '+'}</span>
              </button>
              {openIndex === idx && <p>{item.a}</p>}
            </div>
          ))}
          <div className={styles.ctaBlock}>
            <p>Still have a question?</p>
            <a className={styles.primaryBtn} href={whatsappLink('Hi, I have a question that\u2019s not covered in your FAQ.')} target="_blank" rel="noopener noreferrer">
              Ask us on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Terms = () => (
  <div className={styles.page}>
    <div className={styles.header}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>Legal</span>
        <h1>Terms &amp; conditions</h1>
        <p className={styles.headerSub}>Last updated June 2026</p>
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.content}>
        <p>
          These terms govern your use of the {SITE_NAME} website ({SITE_URL}), our consultation
          services, and any products purchased from us. By booking a consultation, placing an
          order, or otherwise using our services, you agree to the terms below.
        </p>

        <div className={styles.policySection}>
          <h3>1. Consultations</h3>
          <p>
            Vastu consultations, whether in person or remote, are based on the information,
            floor plans, and site access provided by the client. Recommendations are guidance
            based on traditional Vastu Shastra principles and do not constitute structural,
            engineering, or legal advice. Any construction or renovation work should be carried
            out by a qualified architect or contractor.
          </p>
        </div>

        <div className={styles.policySection}>
          <h3>2. Products</h3>
          <p>
            All Vastu products, remedies, and yantras are sold as described at the time of order.
            Products must be used and placed as instructed at the time of purchase or
            consultation. {SITE_NAME} is not responsible for outcomes resulting from incorrect
            placement or use that deviates from our guidance.
          </p>
        </div>

        <div className={styles.policySection}>
          <h3>3. Sales are final</h3>
          <p>
            Once a product order is confirmed and payment is received, the sale is final. We do
            not accept returns, exchanges, or refunds on products, except where an item arrives
            damaged or incorrect &mdash; see our <a href="/shipping-policy">Shipping Policy</a> for
            details. We encourage every client to confirm the right product with our team before
            ordering.
          </p>
        </div>

        <div className={styles.policySection}>
          <h3>4. Payments</h3>
          <p>
            Payment is required to confirm any product order or paid consultation. Prices are
            quoted in Indian Rupees (INR) and are subject to change without prior notice for
            future orders.
          </p>
        </div>

        <div className={styles.policySection}>
          <h3>5. Use of this website</h3>
          <p>
            Content on this website, including text, images, and product descriptions, belongs to
            {' '}{SITE_NAME} and may not be reproduced without permission. We aim to keep all
            information accurate but do not guarantee the website will be free of errors at all
            times.
          </p>
        </div>

        <div className={styles.policySection}>
          <h3>6. Contact</h3>
          <p>
            Questions about these terms can be sent to{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or via WhatsApp using the
            details on our <a href="/contact">Contact page</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export const ShippingPolicy = () => (
  <div className={styles.page}>
    <div className={styles.header}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>Orders &amp; delivery</span>
        <h1>Shipping policy</h1>
        <p className={styles.headerSub}>
          What to expect once you order a Vastu product from us &mdash; and our policy on returns.
        </p>
      </div>
    </div>
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.policySection}>
          <h3>How to order</h3>
          <p>
            Products are ordered directly through WhatsApp or by phone with our team, not through
            an online cart. This lets us confirm the right product for your specific space before
            anything ships.
          </p>
        </div>

        <div className={styles.policySection}>
          <h3>Delivery across India</h3>
          <p>
            We ship pan-India once your order is confirmed and payment is received. Standard
            delivery typically takes 5&ndash;7 business days from confirmation, depending on your
            location and the item ordered. Larger or made-to-order items such as energy kits may
            take longer &mdash; we&rsquo;ll let you know the expected timeline when you order.
          </p>
        </div>

        <div className={styles.policySection}>
          <h3>Tracking your order</h3>
          <p>
            You&rsquo;ll receive tracking details by WhatsApp or email as soon as your order is
            dispatched, so you can follow it to your door.
          </p>
        </div>

        <div className={styles.policySection}>
          <h3>Sales are final</h3>
          <p>
            Once a product is sold and dispatched, it cannot be returned, exchanged, or refunded.
            Many of our items, including yantras and energised remedies, are prepared specifically
            for your order, which is why we ask every client to confirm fit and placement with our
            team before purchasing rather than after.
          </p>
        </div>

        <div className={styles.policySection}>
          <h3>Damaged or incorrect items</h3>
          <p>
            The one exception: if your order arrives damaged in transit, or you receive the wrong
            item, contact us within 48 hours of delivery with photographs of the product and
            packaging. We&rsquo;ll arrange a replacement at no extra cost.
          </p>
        </div>

        <div className={styles.ctaBlock}>
          <p>Not sure which product is right for your space?</p>
          <a className={styles.primaryBtn} href={whatsappLink('Hi, I\u2019d like help choosing the right Vastu product before I order.')} target="_blank" rel="noopener noreferrer">
            Ask us before you order
          </a>
        </div>
      </div>
    </div>
  </div>
);

export const NotFound = () => (
  <div className={styles.notFound}>
    <div className={styles.container}>
      <div className={styles.notFoundContent}>
        <h1>404</h1>
        <h2>This page has wandered off</h2>
        <p>
          The page you&rsquo;re looking for doesn&rsquo;t exist, or may have moved. Here are a few
          places to head instead.
        </p>
        <div className={styles.notFoundLinks}>
          <a href="/" className={styles.backLink}>Go to home</a>
          <a href="/contact" className={styles.secondaryLink}>Contact us</a>
        </div>
      </div>
    </div>
  </div>
);