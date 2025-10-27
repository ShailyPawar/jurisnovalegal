import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdAddCall } from "react-icons/md";
import "../styles/ContactLinks.css";

const ContactLinks = () => {
  return (
    <div className="contact-icons">
      {/* WhatsApp Link */}
      <a
        href="https://wa.me/917310505387"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="icon-animate whatsapp-icon"
      >
        <FaWhatsapp />
        <span className="tooltip">Chat on WhatsApp</span>
      </a>

      {/* Call Link */}
      <a 
        href="tel:+917310505387" 
        title="Call Now" 
        className="icon-animate call-icon"
      >
        <MdAddCall />
        <span className="tooltip">Call Now</span>
      </a>
    </div>
  );
};

export default ContactLinks;