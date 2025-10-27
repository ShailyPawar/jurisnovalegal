// // src/App.jsx
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Header";
// import Footer from "./components/Footer";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import ServiceDetails from "./pages/ServiceDetails";
// import Team from "./pages/Team";
// import Contact from "./pages/Contact";
// import ScrollToTop from "./ScrollToTop";
// import PrivacyPolicy from "./pages/PrivacyPolicy";
// import ContactLinks from "./components/ContactLinks";


// function App() {
//   return (
//     <>
//     <ScrollToTop />
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/services/:id" element={<ServiceDetails />} /> {/* ✅ new route */}
//         <Route path="/Team" element={<Team />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
//       </Routes>
//       <Footer />
//     </>
//   );
// }

// export default App;

// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import ScrollToTop from "./ScrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactLinks from "./components/ContactLinks";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails />} /> {/* ✅ new route */}
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Footer />
      
      {/* ✅ Add this line so your WhatsApp & Call icons appear globally */}
      <ContactLinks />  
    </>
  );
}

export default App;
