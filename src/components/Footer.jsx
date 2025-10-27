import { Link } from "react-router-dom";
import "../styles/Footer.css";
import logo from "../assets/logo1.jpg";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-section footer-brand">
            <Link to="/" className="nav-logo">
                    <img src={logo} alt="logo" className="logo-img" />
            <div className="footer-logo">
              {/* <div className="footer-logo-icon">⚖</div> */}
              <div className="footer-logo-text">
                <span className="logo-text">JURISNOVA</span>
                <span className="logo-highlight">LEGAL</span>
              </div>
            </div>
            </Link>
            <p className="footer-tagline">
              Your trusted partner for comprehensive legal solutions. Delivering 
              excellence with integrity across India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About Us</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/team" className="footer-link">Our Team</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="footer-section">
            <h4 className="footer-title">Practice Areas</h4>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Property & Real Estate</a></li>
              <li><a href="#" className="footer-link">Corporate Law</a></li>
              <li><a href="#" className="footer-link">Litigation Services</a></li>
              <li><a href="#" className="footer-link">Legal Documentation</a></li>
              <li><a href="#" className="footer-link">Compliance Advisory</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h4 className="footer-title">Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>Near Civil Court, Society Road, Laksar – 247663, Uttarakhand</span>
              </div>
              <div className="contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>+91 7310505387</span>
              </div>
              <div className="contact-item">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>info@jurisnovalegal.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">© 2024 Jurisnova Legal Pvt. Ltd. All rights reserved.</p>
            <div className="footer-bottom-links">
              {/* <a href="#" className="bottom-link">Privacy Policy</a> */}
               <Link to="/privacy-policy" className="footer-link">
        Privacy Policy
      </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-glow"></div>
    </footer>
  );
}

export default Footer;