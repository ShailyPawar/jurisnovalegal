// import { Link } from "react-router-dom";
// import "../App.css";
// import "../styles/Header.css";
// import logo from "../assets/logo1.jpg"; // ✅ import your logo here

// export default function Navbar() {
//   return (
//     <nav className="navbar">
//       <Link to="/" className="nav-logo">
//         <img src={logo} alt="logo" className="logo-img" />  {/* ✅ use imported variable */}
//         <div className="logo-text">
//           <span className="logo-name">JURISNOVA</span>
//           <span className="logo-tagline">Legal</span>
//         </div>
//       </Link>

//       <ul className="nav-links">
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//         <li><Link to="/services">Services</Link></li>
//         <li><Link to="/team">Team</Link></li>
//         <li><Link to="/contact">Contact</Link></li>
//       </ul>
//     </nav>
//   );
// }


import { Link } from "react-router-dom";
import { useState } from "react";
import "../App.css";
import "../styles/Header.css";
import logo from "../assets/logo1.jpg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="nav-logo">
          <img src={logo} alt="Jurisnova Legal" className="logo-img" />
          <div className="logo-text">
            <span className="logo-name">JURISNOVA</span>
            <span className="logo-tagline">Legal</span>
          </div>
        </Link>

        {/* Hamburger Menu */}
        <button 
          className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setIsMenuOpen(false)}>Services</Link></li>
          <li><Link to="/team" onClick={() => setIsMenuOpen(false)}>Team</Link></li>
          <li><Link to="/contact" onClick={() => setIsMenuOpen(false)} className="contact-btn">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
}