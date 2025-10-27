import "../styles/PrivacyPolicy.css";

function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-hero">
        <h1>Privacy Policy</h1>
      </div>

      <div className="privacy-policy-content">
        <section>
          <h2>1. Introduction</h2>
          <p>
            Welcome to JurisNova Legal Private Limited (“Company,” “we,” “us,” or “our”). We respect your privacy and
            are committed to protecting the personal information you share with us. This Privacy Policy outlines how we
            collect, use, and safeguard your data when you access our website{" "}
            <a href="https://www.jurisnovalegal.com">www.jurisnovalegal.com</a> (“Website”) or communicate with us
            through any online or offline channel.
          </p>
        </section>

        <section>
          <h2>2. Information We Collect</h2>
          <p>
            We do not automatically collect any personally identifiable information. However, when you voluntarily
            contact us through forms, emails, or phone calls, we may collect your name, email address, phone number, and
            any other information you choose to provide.
          </p>
          <p>
            Additionally, our Website may use essential cookies or analytics tools to ensure proper functionality,
            improve performance, and maintain security. These do not track users for advertising or profiling purposes.
          </p>
        </section>

        <section>
          <h2>3. Use of Information</h2>
          <p>The information collected is used strictly for:</p>
          <ul>
            <li>Responding to your queries and service requests</li>
            <li>Providing relevant information about our legal services</li>
            <li>Enhancing communication and Website performance</li>
          </ul>
          <p>We do not sell, rent, or disclose personal information to third parties.</p>
        </section>

        <section>
          <h2>4. Data Security</h2>
          <p>
            We take reasonable administrative and technical measures to protect your data from unauthorized access,
            misuse, or disclosure. However, as online transmission cannot be guaranteed entirely secure, we do not
            promise absolute protection.
          </p>
        </section>

        <section>
          <h2>5. Updates to this Policy</h2>
          <p>This Privacy Policy may be revised periodically. The latest version will always be available on this page.</p>
        </section>

        <section>
          <h2>6. Contact Us</h2>
          <p>
            For any privacy-related queries, please contact us at{" "}
            <a href="mailto:info@jurisnovalegal.com">info@jurisnovalegal.com</a>
          </p>
        </section>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
