import { useParams, useNavigate } from "react-router-dom";
import "../styles/ServiceDetails.css";

export default function ServiceDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Full service data (same as before)
  const services = [
    {
      id: "1",
      title: "Litigation & Legal Representation",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1200",
      overview:
        "Our Litigation & Legal Representation services ensure strong advocacy, strategic case management, and complete client transparency at every stage of the legal process.",
      details: [
        "Civil litigation covering property, contracts, damages, and inheritance.",
        "Criminal defense and prosecution representation in lower and higher courts.",
        "Family law disputes including divorce, maintenance, and child custody.",
        "Corporate and commercial disputes involving arbitration or breach of contract.",
        "Appeals, writs, and petitions before High Courts and Supreme Court.",
      ],
      note:
        "We believe every case deserves personalized attention. Our legal experts work tirelessly to protect your rights while ensuring professional ethics and diligence.",
    },
    {
      id: "2",
      title: "Corporate & Business Law",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200",
      overview:
        "We provide end-to-end corporate legal support for businesses — from startups to large enterprises — ensuring compliance, governance, and strategic growth.",
      details: [
        "Company incorporation, LLP formation, and business registrations.",
        "Drafting and reviewing shareholder, vendor, and employment agreements.",
        "Corporate restructuring, M&A, and joint venture documentation.",
        "Regulatory compliance with MCA, SEBI, and FEMA guidelines.",
        "Arbitration and mediation for business dispute resolution.",
      ],
      note:
        "Our goal is to empower your business with legal confidence, helping you operate efficiently while mitigating risk and maintaining compliance.",
    },
    {
      id: "3",
      title: "Property & Real Estate Law",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1200",
      overview:
        "Our Property & Real Estate Law practice safeguards your real estate investments with meticulous legal due diligence and documentation.",
      details: [
        "Title verification and property ownership authentication.",
        "Drafting and registration of sale deeds, lease deeds, and gift deeds.",
        "Property dispute resolution through court proceedings or mediation.",
        "Legal vetting for land acquisition and development projects.",
        "Advisory for joint ventures, builder-buyer agreements, and RERA compliance.",
      ],
      note:
        "Whether you’re buying, selling, or developing property, Jurisnova ensures each transaction is secure, transparent, and compliant with Indian legal standards.",
    },
    {
      id: "4",
      title: "Documentation & Registrations",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200",
      overview:
        "We handle the drafting, notarization, and registration of all essential legal documents, ensuring accuracy and legal validity.",
      details: [
        "Drafting deeds, wills, power of attorney, affidavits, and trusts.",
        "Document registration with Sub-Registrar and government authorities.",
        "Obtaining certified copies from courts and official bodies.",
        "Legal translation and notarization for foreign submissions.",
        "E-stamping and compliance with digital documentation standards.",
      ],
      note:
        "Our documentation experts ensure your legal papers are error-free, recognized by authorities, and compliant with current legal frameworks.",
    },
    {
      id: "5",
      title: "Legal Advisory & Consultancy",
      image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200",
      overview:
        "Our legal advisory and consultancy services offer clients strategic insights to prevent disputes and maintain long-term legal stability.",
      details: [
        "Advisory on corporate governance, business policy, and risk management.",
        "Consultation for property, financial, and compliance issues.",
        "Pre-litigation analysis and dispute prevention strategies.",
        "Legal audits and review of corporate records and contracts.",
        "Representation before regulatory bodies and administrative authorities.",
      ],
      note:
        "Our consultants blend legal acumen with business practicality — helping clients make confident, informed, and compliant decisions.",
    },
    {
      id: "6",
      title: "Notary Services & NOCs",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=1200",
      overview:
        "We provide certified notary and attestation services to validate and authenticate your legal documents swiftly and securely.",
      details: [
        "Notarization of affidavits, deeds, and agreements.",
        "Preparation and attestation of No Objection Certificates (NOCs).",
        "Document attestation for visa, immigration, and academic purposes.",
        "Power of Attorney certification and legalization.",
        "Online document verification and legal notarization guidance.",
      ],
      note:
        "We ensure every document is authenticated, compliant, and legally recognized — locally and internationally.",
    },
  ];

  const service = services.find((s) => s.id === id);

  if (!service) {
    return (
      <div className="details-container">
        <p>Service not found.</p>
        <button onClick={() => navigate("/services")} className="back-btn">
          Back to Services
        </button>
      </div>
    );
  }

  return (
    <section className="service-details-page">
      {/* Hero Section */}
      <div
        className="details-hero"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="overlay"></div>
        <h1>{service.title}</h1>
      </div>

      {/* Content */}
      <div className="details-content">
        <p className="overview">{service.overview}</p>

        <ul className="details-list">
          {service.details.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <p className="note">{service.note}</p>

        <button onClick={() => navigate("/services")} className="back-btn">
          ← Back to All Services
        </button>
      </div>
    </section>
  );
}
