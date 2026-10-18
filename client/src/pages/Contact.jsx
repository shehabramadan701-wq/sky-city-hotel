import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import hotel from "../data/hotel";
import "./Contact.css";

function Contact() {
  return (
    <div>
      <section className="page-header contact-header">
        <h1>Contact Us</h1>
        <p>We are happy to help you plan your stay</p>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-cards">
            <a href={"tel:" + hotel.phone} className="contact-card">
              <div className="contact-icon"><FiPhone /></div>
              <h4>Call us</h4>
              <p>{hotel.phone}</p>
            </a>

            <a href={"https://wa.me/" + hotel.whatsapp} target="_blank" className="contact-card">
              <div className="contact-icon"><FaWhatsapp /></div>
              <h4>WhatsApp</h4>
              <p>Chat with us</p>
            </a>

            <a href={"mailto:" + hotel.email} className="contact-card">
              <div className="contact-icon"><FiMail /></div>
              <h4>Email</h4>
              <p>{hotel.email}</p>
            </a>

            <div className="contact-card">
              <div className="contact-icon"><FiClock /></div>
              <h4>Front desk</h4>
              <p>Open 24 hours</p>
            </div>
          </div>

          <div className="map">
            <h3><FiMapPin /> {hotel.address}</h3>
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Sky+City+Hotel+Downtown+Cairo&output=embed"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
