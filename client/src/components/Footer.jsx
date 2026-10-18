import { Link } from "react-router-dom";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import hotel from "../data/hotel";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        {/* ===== اسم الفندق ===== */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <span className="logo-mark">SC</span>
            <span>{hotel.name}</span>
          </Link>
          <p>Modern suites with a private kitchen and breakfast included, in the heart of Cairo.</p>
          <a className="footer-whatsapp" href={"https://wa.me/" + hotel.whatsapp} target="_blank">
            <FaWhatsapp /> Chat on WhatsApp
          </a>
        </div>

        {/* ===== الصفحات ===== */}
        <div className="footer-col">
          <h4>Pages</h4>
          <div className="footer-pages">
            <Link to="/">Home</Link>
            <Link to="/rooms">Suites</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        </div>

        {/* ===== التواصل ===== */}
        <div className="footer-col">
          <h4>Contact</h4>
          <a href={"tel:" + hotel.phone}><FiPhone /> {hotel.phone}</a>
          <a href={"mailto:" + hotel.email}><FiMail /> {hotel.email}</a>
          <p><FiMapPin /> {hotel.address}</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© 2026 {hotel.name}. All rights reserved.</p>
          <p>Breakfast included · Free cancellation</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
