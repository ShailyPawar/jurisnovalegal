
import "../styles/Team.css";
import team1 from "../assets/team1.jpg";
import team2 from "../assets/team2.jpg";

export default function Team() {
  const members = [
    {
      name: "Komal Choudhary",
      role: "Founder and Managing Director",
      desc: "Provides overall strategic direction and governance of Jurisnova Legal.",
      img: team1,
      expertise: ["Strategic Planning", "Legal Governance", "Business Development"],

    },
    {
      name: "Sachin Kumar Aggarwal",
      role: "Director",
      desc: "Specializes in registrations, compliance, and financial legal services.",
      img: team2,
      expertise: ["Compliance Management", "Financial Law", "Corporate Registrations"],
    }
  ];

  return (
    <div className="team-page">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="team-hero-overlay"></div>
        <div className="team-hero-content">
          <h1>LEADERSHIP TEAM</h1>
          <p>Meet the professionals driving excellence at Jurisnova Legal</p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="team-section">
        <div className="team-container">
          <div className="team-intro">
            <h2>Our Leaders</h2>
            <p>
              Our leadership team brings together decades of combined experience in legal services,
              corporate governance, and client relations. Their vision and dedication drive our
              commitment to excellence.
            </p>
          </div>

          <div className="team-grid">
            {members.map((member, i) => (
              <div key={i} className="team-member-card">
                <div className="member-image-wrapper">
                  <img src={member.img} alt={member.name} className="member-image" />
                  <div className="image-overlay">
                  </div>
                </div>

                <div className="member-content">
                  <div className="member-header">
                    <h3>{member.name}</h3>
                    <span className="member-role">{member.role}</span>
                  </div>
                  
                  <p className="member-desc">{member.desc}</p>
                  
                  <div className="member-expertise">
                    <h4>Areas of Expertise</h4>
                    <ul>
                      {member.expertise.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}