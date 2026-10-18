import { Link } from "react-router-dom";
import hotel from "../data/hotel";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h3>{hotel.name}</h3>
          <p>A cozy, modern hotel in the heart of Downtown Cairo.</p>
        </div>

        <div>
          <h4>Pages</h4>
          <Link to="/">Home</Link>
          <Link to="/rooms">Rooms</Link>
          <Link to="/booking">Booking</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h4>Contact</h4>
          <p>{hotel.phone}</p>
          <p>{hotel.email}</p>
          <p>{hotel.address}</p>
        </div>
      </div>

      <p className="footer-bottom">© 2026 {hotel.name}. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
