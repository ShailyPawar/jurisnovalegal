
import "../styles/Home.css";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaBalanceScale, FaShieldAlt, FaHandsHelping } from "react-icons/fa";

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Jurisnova Legal Private Limited</h1>
            <p className="hero-tagline">Your Foundation for Legal Clarity</p>
            <p className="hero-description">
              A dynamic legal services company committed to delivering end-to-end legal solutions 
              with professionalism, accuracy, and integrity across India.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn-primary">Our Services</Link>
              <Link to="/contact" className="btn-secondary">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>
{/* Who We Are Section */}
<section className="who-we-are-section">
  <div className="who-wrapper">
    <div className="who-image">
      <div className="who-image-overlay"></div>
      <img
        src="src/assets/home1.jpg"
        alt="Professional legal consultation"
      />
    </div>

    <div className="who-text">
      <h2>Who We Are</h2>
      <p className="intro">
        Jurisnova Legal Pvt. Ltd. is a full-service law firm that combines deep legal expertise with modern business understanding.
      </p>
      <p>
        We serve individuals, startups, and corporates with dedication and integrity — offering
        end-to-end legal support from advisory to representation. Our practice covers corporate,
        property, civil, and commercial law, with a strong focus on ethical and client-centric solutions.
      </p>
      <p>
        Backed by experienced advocates and legal consultants, Jurisnova stands for justice,
        precision, and accountability — building trust with every case and client we represent.
      </p>

      <Link to="/about" className="btn-learn-more">Learn More</Link>
    </div>
  </div>
</section>


      {/* Quick Contact Section */}
      <section className="quick-contact-section">
        <div className="quick-contact-container">
          <a href="tel:+917310505387" className="contact-card phone-card">
            <div className="card-icon"><FaPhoneAlt /></div>
            <h3>Call Us</h3>
            <p>+917310505387</p>
            <span className="card-arrow">→</span>
          </a>
<a
  href="mailto:info@jurisnovalegal.com"
  className="contact-card email-card"
  target="_blank"
  rel="noopener noreferrer"
>
  <div className="card-icon">
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      width="40"
      height="40"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  </div>
  <h3>Email Us</h3>
  <p>info@jurisnovalegal.com</p>
  <span className="card-arrow">→</span>
</a>

        <a href="https://wa.me/917310505387" target="_blank" rel="noopener noreferrer" className="contact-card whatsapp-card">
            <div className="card-icon"><FaWhatsapp /></div>
            <h3>WhatsApp</h3>
            <p>Instant legal support 24/7</p>
            <span className="card-arrow">→</span>
          </a>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section">
        <div className="section-container">
          <div className="section-header">
            <h2>Why Choose Jurisnova</h2>
            <p>
              With a client-first approach and an unwavering focus on results, Jurisnova stands out
              as a trusted legal ally across diverse practice areas.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon"><FaBalanceScale /></div>
              <h3>Expert Representation</h3>
              <p>Experienced advocates ensuring justice in every legal matter.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><FaShieldAlt /></div>
              <h3>Ethical Practice</h3>
              <p>Transparent, honest, and client-centric legal services.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon"><FaHandsHelping /></div>
              <h3>Comprehensive Support</h3>
              <p>From advisory to litigation, we stand by you at every step.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
