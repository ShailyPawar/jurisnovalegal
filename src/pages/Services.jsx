


import { useNavigate } from "react-router-dom";
import "../styles/Services.css";

export default function Services() {
  const navigate = useNavigate();

  const services = [
    {
      id: "1",
      title: "Litigation & Legal Representation",
      description: "Civil, Criminal, Family, Corporate & Commercial cases",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&q=80",
      icon: "⚖️"
    },
    {
      id: "2",
      title: "Corporate & Business Law",
      description: "Company incorporation, compliance, contracts, arbitration",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
      icon: "🏢"
    },
    {
      id: "3",
      title: "Property & Real Estate Law",
      description: "Title search reports, property verification, registrations, disputes",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80",
      icon: "🏠"
    },
    {
      id: "4",
      title: "Documentation & Registrations",
      description: "Deeds, wills, contracts, trusts, certified copies from courts",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
      icon: "📄"
    },
    {
      id: "5",
      title: "Legal Advisory & Consultancy",
      description: "Property, corporate, compliance, dispute resolution",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&q=80",
      icon: "💼"
    },
    {
      id: "6",
      title: "Notary Services & NOCs",
      description: "Notarization, attestations, NOCs, certifications",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80",
      icon: "✍️"
    }
  ];

  return (
    <section className="services-section">
      <div className="services-hero">
        <h2>OUR SERVICES</h2>
        <p className="services-subtitle">Comprehensive Legal Solutions for Every Need</p>
      </div>
      
      <div className="service-grid">
        {services.map((service, i) => (
          <div key={i} className="service-card">
            <div className="service-image-wrapper">
              <img src={service.image} alt={service.title} className="service-image" />
              <div className="service-overlay"></div>
              <span className="service-icon">{service.icon}</span>
            </div>
            <div className="service-content">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button
                className="service-learn-more"
                onClick={() => navigate(`/services/${service.id}`)} // ✅ navigate to ServiceDetails
              >
                Learn More
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
