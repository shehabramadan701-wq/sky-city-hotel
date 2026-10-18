import { Link } from "react-router-dom";
import { FiWifi, FiClock, FiCoffee, FiMap, FiStar, FiMapPin } from "react-icons/fi";
import { FaRegSnowflake } from "react-icons/fa";
import { IoCarOutline } from "react-icons/io5";

import RoomCard from "../components/RoomCard";
import rooms from "../data/rooms";
import hotel from "../data/hotel";
import "./Home.css";

// الخدمات
const services = [
  { icon: <FiWifi />, title: "Free WiFi", text: "Fast internet in all rooms" },
  { icon: <FaRegSnowflake />, title: "Air Conditioning", text: "In every room" },
  { icon: <FiClock />, title: "24h Front Desk", text: "We are always here" },
  { icon: <FiCoffee />, title: "Breakfast", text: "Fresh every morning" },
  { icon: <IoCarOutline />, title: "Airport Transfer", text: "Ask us to arrange it" },
  { icon: <FiMap />, title: "Tours", text: "Pyramids & city tours" },
];

// الأماكن القريبة
const places = [
  { name: "Egyptian Museum", distance: "10 min walk" },
  { name: "Tahrir Square", distance: "5 min walk" },
  { name: "Khan El Khalili", distance: "15 min drive" },
  { name: "Giza Pyramids", distance: "40 min drive" },
  { name: "Cairo Airport", distance: "35 min drive" },
];

// آراء العملاء (حط ريفيوهات حقيقية من بوكينج)
const reviews = [
  { name: "Guest from Germany", score: "9.0", text: "Great location, clean room and very helpful staff." },
  { name: "Guest from Saudi Arabia", score: "8.5", text: "Close to everything in downtown. Would stay again." },
  { name: "Guest from UK", score: "9.2", text: "The team helped us book a Pyramids tour. Excellent value." },
];

function Home() {
  // أول 3 غرف بس
  const firstRooms = rooms.slice(0, 3);

  return (
    <div>
      {/* ===== الصورة الكبيرة ===== */}
      <section className="hero">
        <div className="container">
          <span className="small-title">Welcome to {hotel.name}</span>
          <h1>Your home in the heart of Cairo</h1>
          <p>
            A cozy, modern hotel in Downtown Cairo, steps away from the Egyptian Museum
            and Tahrir Square.
          </p>
          <div className="hero-buttons">
            <Link to="/rooms" className="btn btn-gold">Explore Rooms</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* ===== أرقام سريعة ===== */}
      <div className="container">
        <div className="stats">
          <div><strong>{hotel.rating}</strong><span>Guest rating</span></div>
          <div><strong>{rooms.length}</strong><span>Room types</span></div>
          <div><strong>24h</strong><span>Front desk</span></div>
          <div><strong>5 min</strong><span>To Tahrir Square</span></div>
        </div>
      </div>

      {/* ===== عن الفندق ===== */}
      <section className="section">
        <div className="container about">
          <div className="about-img">
            <img src="https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=70&auto=format" alt="Hotel" />
            <div className="about-badge">
              <strong>{hotel.rating}</strong>
              <span><FiStar /> Guest rating</span>
            </div>
          </div>

          <div className="about-text">
            <span className="small-title">About us</span>
            <h2>Comfort and hospitality in Downtown Cairo</h2>
            <p>
              Sky City Hotel welcomes travelers who want to live the real Cairo. The city's
              most famous landmarks, cafés and markets are all within walking distance.
            </p>
            <p>
              Every room has air conditioning, free WiFi and a private bathroom. Our team is
              happy to help you plan tours, airport transfers and trips to the Pyramids.
            </p>
            <Link to="/rooms" className="btn btn-dark">See Our Rooms</Link>
          </div>
        </div>
      </section>

      {/* ===== الغرف ===== */}
      <section className="section bg-cream">
        <div className="container">
          <div className="section-title">
            <span className="small-title">Our rooms</span>
            <h2>Find the perfect room</h2>
          </div>

          <div className="rooms-grid">
            {firstRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          <div className="center">
            <Link to="/rooms" className="btn btn-dark">View All Rooms</Link>
          </div>
        </div>
      </section>

      {/* ===== الخدمات ===== */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="small-title">Services</span>
            <h2>Everything for a great stay</h2>
          </div>

          <div className="services">
            {services.map((service) => (
              <div className="service" key={service.title}>
                <div className="service-icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== المكان ===== */}
      <section className="location">
        <div className="container location-inner">
          <div>
            <span className="small-title">Location</span>
            <h2>Cairo is right outside your door</h2>
            <p><FiMapPin /> {hotel.address}</p>
          </div>

          <div className="places">
            {places.map((place) => (
              <div className="place" key={place.name}>
                <span>{place.name}</span>
                <strong>{place.distance}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== آراء العملاء ===== */}
      <section className="section bg-cream">
        <div className="container">
          <div className="section-title">
            <span className="small-title">Reviews</span>
            <h2>What our guests say</h2>
          </div>

          <div className="reviews">
            {reviews.map((review) => (
              <div className="review" key={review.name}>
                <span className="review-score">{review.score}</span>
                <p>"{review.text}"</p>
                <strong>{review.name}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== احجز ===== */}
      <section className="cta">
        <h2>Ready for your Cairo adventure?</h2>
        <p>Book directly with us for the best price.</p>
        <Link to="/booking" className="btn btn-gold">Book Your Stay</Link>
      </section>
    </div>
  );
}

export default Home;
