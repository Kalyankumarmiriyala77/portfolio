import { useState } from "react";
import "./Contact.css";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
   const [showPopup, setShowPopup] = useState(false);

const handleSubmit = (e) => {
  e.preventDefault();

  setShowPopup(true);

  setTimeout(() => {
    setShowPopup(false);
  }, 3000);

  e.target.reset();
};
  return (
    <section className="contact" id="contact">

      <div className="contact-title">
        <p>GET IN TOUCH</p>
        <h2>Contact Me</h2>
      </div>

      <div className="contact-container">

        {/* Left Side */}
        <div className="contact-info">

          <div className="info-card">
            <FaEnvelope className="icon" />
            <div>
              <h3>Email</h3>
              <p>kalyankumar4203@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <FaPhone className="icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 9347781780</p>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h3>Location</h3>
              <p>Andhra Pradesh, India</p>
            </div>
          </div>

          <div className="social-icons">
            <a href="#"><FaGithub /></a>
            <a href="#"><FaLinkedin /></a>
          </div>

        </div>

        {/* Right Side */}
       <form className="contact-form" onSubmit={handleSubmit}>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>
        {showPopup && (
  <div className="popup">
    <div className="popup-box">
      ✅ Message Submitted Successfully!
    </div>
  </div>
)}

      </div>

    </section>
  );
}

export default Contact;