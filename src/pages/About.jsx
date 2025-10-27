
import React from "react";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <h1>About Jurisnova Legal Pvt. Ltd.</h1>
          <p className="about-lead">
            Delivering end-to-end legal solutions with professionalism, accuracy and integrity.
            Headquartered in Uttarakhand, we serve clients across India.
          </p>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="about-intro-section">
        <div className="about-container">
          <div className="about-intro-content">
            <h2>Who We Are</h2>
            <p>
              Jurisnova Legal Pvt. Ltd. is a full-service legal firm committed to providing
              comprehensive legal solutions to individuals, businesses, and institutions across India.
              With a strong foundation built on integrity, expertise, and client satisfaction, we have
              established ourselves as a trusted partner in the legal landscape.
            </p>
            <p>
              Our team comprises seasoned legal professionals with deep expertise across various
              practice areas. From property verification to complex corporate litigation, we tailor
              our services to meet the unique needs of each client, ensuring the highest standards
              of professional service.
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="mission-vision-section">
        <div className="about-container">
          <div className="mv-grid">
            <div className="mv-card mission-card">
              <div className="mv-icon-wrapper">
                <div className="mv-icon">🎯</div>
              </div>
              <h3>Our Mission</h3>
              <p>
                To provide comprehensive, ethical, and client-centric legal services that empower
                individuals and organizations to navigate complex legal challenges with confidence
                and clarity.
              </p>
            </div>

            <div className="mv-card vision-card">
              <div className="mv-icon-wrapper">
                <div className="mv-icon">🔭</div>
              </div>
              <h3>Our Vision</h3>
              <p>
                To become the premier pan-India legal services network, recognized for excellence,
                integrity, and innovative solutions that set new standards in the legal profession.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="values-section">
        <div className="about-container">
          <div className="section-title">
            <h2>Our Core Values</h2>
            <p>The principles that guide every decision we make and every client we serve</p>
          </div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-number">01</div>
              <div className="value-content">
                <h4>Integrity</h4>
                <p>
                  Unwavering commitment to honesty, fairness, and ethical conduct in all our
                  professional dealings.
                </p>
              </div>
            </div>

            <div className="value-card">
              <div className="value-number">02</div>
              <div className="value-content">
                <h4>Excellence</h4>
                <p>
                  Continuous pursuit of the highest standards in legal knowledge, service delivery,
                  and client outcomes.
                </p>
              </div>
            </div>

            <div className="value-card">
              <div className="value-number">03</div>
              <div className="value-content">
                <h4>Transparency</h4>
                <p>
                  Clear, honest communication about fees, processes, timelines, and progress at
                  every stage.
                </p>
              </div>
            </div>

            <div className="value-card">
              <div className="value-number">04</div>
              <div className="value-content">
                <h4>Client Focus</h4>
                <p>
                  Deep understanding of client needs with personalized attention and dedicated
                  support throughout.
                </p>
              </div>
            </div>

            <div className="value-card">
              <div className="value-number">05</div>
              <div className="value-content">
                <h4>Innovation</h4>
                <p>
                  Embracing modern approaches and technology to deliver efficient, effective legal
                  solutions.
                </p>
              </div>
            </div>

            <div className="value-card">
              <div className="value-number">06</div>
              <div className="value-content">
                <h4>Accountability</h4>
                <p>
                  Taking full responsibility for our work and commitments, ensuring reliable and
                  timely delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="what-we-do-section">
        <div className="about-container">
          <h2>What We Do</h2>
          <p className="section-subtitle">
            Comprehensive legal services designed to address the diverse needs of our clients
          </p>

          <div className="services-showcase">
            <div className="service-item">
              <h4>Property & Real Estate</h4>
              <p>
                Complete property verification, title search reports, documentation, and dispute
                resolution services across India.
              </p>
            </div>

            <div className="service-item">
              <h4>Litigation & Representation</h4>
              <p>
                Expert representation in civil, criminal, and family matters across all levels of
                courts with experienced advocates.
              </p>
            </div>

            <div className="service-item">
              <h4>Corporate & Business Law</h4>
              <p>
                Company formation, compliance management, contract drafting, and comprehensive
                corporate legal advisory services.
              </p>
            </div>

            <div className="service-item">
              <h4>Legal Documentation</h4>
              <p>
                Professional drafting, review, registration, and notarization of all legal
                documents with precision and care.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}