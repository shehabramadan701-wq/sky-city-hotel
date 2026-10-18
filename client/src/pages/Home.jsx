import { Link } from "react-router-dom";
import { FiWifi, FiCoffee, FiTv, FiCheckCircle } from "react-icons/fi";
import { FaRegSnowflake } from "react-icons/fa";
import { MdOutlineKitchen, MdOutlineVolumeOff } from "react-icons/md";
import { IoRestaurantOutline } from "react-icons/io5";

import RoomCard from "../components/RoomCard";
import rooms from "../data/rooms";
import hotel from "../data/hotel";
import "./Home.css";

// الخدمات
const services = [
  { icon: <FiCoffee />, title: "Breakfast Included", text: "In every booking" },
  { icon: <MdOutlineKitchen />, title: "Private Kitchen", text: "In every suite" },
  { icon: <IoRestaurantOutline />, title: "Rooftop Restaurant", text: "With a view over Cairo" },
  { icon: <FaRegSnowflake />, title: "Air Conditioning", text: "In all rooms" },
  { icon: <MdOutlineVolumeOff />, title: "Soundproofing", text: "Quiet, restful nights" },
  { icon: <FiWifi />, title: "Free WiFi", text: "Everywhere in the building" },
];

// صور الأكل
const foodImages = [
  "images/hotel/food-1.webp",
  "images/hotel/food-2.webp",
  "images/hotel/food-3.webp",
  "images/hotel/food-4.webp",
  "images/hotel/food-5.webp",
];

// آراء العملاء (من بوكينج)
const reviews = [
  {
    name: "Isam",
    country: "Libya",
    text: "All are very good, good staff, very clean and comfortable apartment. With good prices, I like it, so I hope book again next trip.",
  },
  {
    name: "Marcia",
    country: "Egypt",
    text: "I really liked this place and can highly recommend it. Everything was very clean and beautiful ❤️",
  },
  {
    name: "المعتصم",
    country: "Oman",
    text: "The hotel is beautiful and very clean... a new hotel. The staff are very cooperative, especially Professor Mohammed. Our destination next time, God willing.",
  },
  {
    name: "Haitham",
    country: "Qatar",
    text: "The place is comfortable, the staff are professional, we didn't encounter any problems, and the breakfast is good. Thank you to everyone involved in managing the place.",
  },
  {
    name: "Ghassan",
    country: "Burundi",
    text: "The staff and workers, the manager Mr. Ahmed Hamza is a wonderful person, and Mr. Hamza from the reception and 3 at the reception named Mohammed are all good, and the restaurant and the workers in general make you feel like you are in your home.",
  },
  {
    name: "Maha",
    country: "Saudi Arabia",
    text: "I thoroughly enjoyed breakfast – the restaurant and the chef made the food delicious. A huge thank you to Mr. Mohamed Hanafi; he was incredibly kind, polite, and had excellent service. The reception staff were wonderful.",
  },
];

function Home() {
  return (
    <div>
      {/* ===== أول الصفحة ===== */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-text">
            <span className="small-title">Welcome to {hotel.name}</span>
            <h1>Your home in the heart of Cairo</h1>
            <p>
              Modern suites with a private kitchen, breakfast included and a rooftop
              restaurant overlooking the city.
            </p>
            <div className="hero-buttons">
              <Link to="/rooms" className="btn btn-gold">Explore Suites</Link>
              <Link to="/contact" className="btn btn-outline">Contact Us</Link>
            </div>
          </div>

          <div className="hero-images">
            <img className="hero-main" src="images/hotel/facade.webp" alt={hotel.name} />
            <img className="hero-small" src="images/hotel/rooftop.webp" alt="Rooftop restaurant" />
          </div>
        </div>
      </section>

      {/* ===== أرقام سريعة ===== */}
      <div className="container">
        <div className="stats">
          <div><strong>{rooms.length}</strong><span>Suite types</span></div>
          <div><FiCoffee /><span>Breakfast included</span></div>
          <div><FiCheckCircle /><span>Free cancellation</span></div>
          <div><IoRestaurantOutline /><span>Rooftop restaurant</span></div>
        </div>
      </div>

      {/* ===== عن الفندق ===== */}
      <section className="section">
        <div className="container about">
          <div className="about-img">
            <img src="images/hotel/lobby.webp" alt="Lobby" />
            <img className="about-img-small" src="images/hotel/reception.webp" alt="Reception" />
          </div>

          <div className="about-text">
            <span className="small-title">About us</span>
            <h2>Feel at home, with hotel comfort</h2>
            <p>
              Sky City Apartments offers spacious suites that feel like your own apartment.
              Every suite has a bedroom, a living area and a private kitchen, so you can
              stay for a night or a whole month.
            </p>
            <p>
              Start your day with breakfast included in your stay, and end it with dinner
              at our rooftop restaurant. Our reception team is always ready to help.
            </p>
            <Link to="/rooms" className="btn btn-dark">See Our Suites</Link>
          </div>
        </div>
      </section>

      {/* ===== الغرف ===== */}
      <section className="section bg-cream">
        <div className="container">
          <div className="section-title">
            <span className="small-title">Our suites</span>
            <h2>Choose your suite</h2>
          </div>

          <div className="rooms-grid">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== المطعم ===== */}
      <section className="section">
        <div className="container rooftop">
          <div className="rooftop-text">
            <span className="small-title">Rooftop restaurant</span>
            <h2>Dinner with a view</h2>
            <p>
              Our glass-walled rooftop restaurant is open all year. Enjoy fresh breakfast,
              light meals and drinks with a panoramic view over Cairo.
            </p>
          </div>
          <img src="images/hotel/rooftop.webp" alt="Rooftop restaurant" />
        </div>

        <div className="container food">
          {foodImages.map((image) => (
            <img key={image} src={image} alt="Food" />
          ))}
        </div>
      </section>

      {/* ===== الخدمات ===== */}
      <section className="section bg-cream">
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

      {/* ===== آراء العملاء ===== */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <span className="small-title">Guest reviews</span>
            <h2>What our guests say</h2>
          </div>

          <div className="reviews">
            {reviews.map((review) => (
              <div className="review" key={review.name}>
                <div className="review-head">
                  <span className="review-avatar">{review.name[0]}</span>
                  <div>
                    <strong>{review.name}</strong>
                    <small>{review.country}</small>
                  </div>
                </div>
                <p>"{review.text}"</p>
              </div>
            ))}
          </div>

          <p className="reviews-source">Reviews from our guests on Booking.com</p>
        </div>
      </section>

      {/* ===== احجز ===== */}
      <section className="cta">
        <h2>Ready for your stay in Cairo?</h2>
        <p>Book directly with us. Breakfast included and free cancellation.</p>
        <Link to="/rooms" className="btn btn-gold">Book Your Suite</Link>
      </section>
    </div>
  );
}

export default Home;
