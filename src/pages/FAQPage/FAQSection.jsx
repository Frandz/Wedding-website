import React, { useState } from "react";
import "../FAQPage/FAQPage.css";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: "When and where is the wedding?", answer: "Our wedding will take place on February 2, 2027. The ceremony and reception venue details are available on the Venue section. We've chosen a location that reflects our love for technology and sunsets." },
    { question: "What is the dress code?", answer: "Garden Formal. Think soft fabrics, flowy dresses and linen suits — comfortable enough for warm weather but elegant enough for photos. Please do not wear white." },
    { question: "Can I bring a plus one?", answer: "Please refer to your invitation for details about plus ones. If your invitation includes a plus one, we'd love to meet them! If not, we appreciate your understanding as we're keeping the celebration intimate." },
    { question: "Will there be food and drinks?", answer: "Absolutely! We'll have a delicious dinner service with options for various dietary preferences. Our menu features a fusion of traditional and modern cuisine. Open bar will be available with signature cocktails inspired by our love story." },
    { question: "Is there parking available?", answer: "Yes, complimentary parking will be available at the venue. We'll also have valet service for your convenience. Detailed parking instructions will be sent closer to the wedding date." },
    { question: "Can I take photos during the ceremony?", answer: "We kindly ask that you refrain from taking photos during the ceremony itself. We have professional photographers and videographers capturing every moment. Feel free to take photos during the reception!" },
    { question: "What time should I arrive?", answer: "We recommend arriving 30 minutes before the ceremony starts. This gives you time to find your seat, mingle with other guests, and settle in before we say 'I do.'" },
    { question: "Will the wedding be indoors or outdoors?", answer: "Our ceremony will be held outdoors to capture the beautiful sunset, followed by an indoor reception. Don't worry about weather — we have a beautiful backup plan in case of rain!" },
    { question: "How can I RSVP?", answer: "You can RSVP through our website by clicking the 'Reserve Your Spot' button. Please respond by the date indicated on your invitation so we can finalize our headcount." },
    { question: "What's the story behind your hacker theme?", answer: "We're both IT professionals who met through code! Our love story is like a beautiful program — it started with a bug (love at first sight), went through many iterations (dates), and now we're ready to deploy the final version (marriage)." },
  ];

  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="faq-page">
      <div className="faq-background">
        <div className="gradient-overlay"></div>
      </div>

      {/* Back link removed — horizontal nav handles navigation */}
      <div className="faq-header">
        <h1 className="faq-title">FAQ</h1>
        <p className="faq-subtitle">Frequently Asked Questions</p>
      </div>

      <div className="faq-content">
        <div className="faq-intro">
          <p className="intro-text">
            Got questions? We've got answers! If you don't see your question here, feel free to reach out to us directly.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span className="question-text">{faq.question}</span>
                <span className="question-icon">{openIndex === index ? "−" : "+"}</span>
              </button>
              <div className="faq-answer">
                <p className="answer-text">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-contact">
          <h3 className="contact-title">Still Have Questions?</h3>
          <p className="contact-text">Feel free to reach out to us through our social media or email.</p>
          <div className="contact-links">
            <a href="mailto:wedding@example.com" className="contact-link">
              <span className="link-icon">✉️</span>
              <span className="link-text">Email Us</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              <span className="link-icon">📸</span>
              <span className="link-text">Instagram</span>
            </a>
          </div>
        </div>
      </div>
      {/* Footer nav buttons removed */}
    </div>
  );
};

export default FAQSection;
