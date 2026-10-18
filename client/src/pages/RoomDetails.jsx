import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FiUsers, FiMaximize, FiEye, FiCheck } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import rooms from "../data/rooms";
import "./RoomDetails.css";

function RoomDetails() {
  // رقم الغرفة من الرابط  مثلا: /rooms/3
  const { id } = useParams();

  // دوّر على الغرفة اللي ليها نفس الرقم
  const room = rooms.find((r) => r.id == id);

  // الصورة الكبيرة اللي ظاهرة دلوقتي
  const [mainImage, setMainImage] = useState(0);

  if (!room) {
    return (
      <div className="container details-page">
        <h2>Room not found</h2>
        <Link to="/rooms" className="btn btn-dark">Back to Rooms</Link>
      </div>
    );
  }

  return (
    <div className="details-page">
      <div className="container details-grid">
        {/* ===== الشمال: الصور والتفاصيل ===== */}
        <div>
          <img className="main-image" src={room.images[mainImage]} alt={room.name} />

          <div className="thumbs">
            {room.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt=""
                className={index === mainImage ? "active" : ""}
                onClick={() => setMainImage(index)}
              />
            ))}
          </div>

          <h1>{room.name}</h1>

          <div className="facts">
            <div><FiMaximize /><span>Size</span><strong>{room.size} m²</strong></div>
            <div><FiUsers /><span>Guests</span><strong>{room.guests}</strong></div>
            <div><IoBedOutline /><span>Beds</span><strong>{room.beds}</strong></div>
            <div><FiEye /><span>View</span><strong>{room.view}</strong></div>
          </div>

          <h3>About this room</h3>
          <p className="description">{room.description}</p>

          <h3>Amenities</h3>
          <div className="amenities">
            {room.amenities.map((item) => (
              <p key={item}><FiCheck /> {item}</p>
            ))}
          </div>
        </div>

        {/* ===== اليمين: بوكس الحجز ===== */}
        <div className="book-box">
          <p className="book-price">${room.price} <span>/ night</span></p>
          <p>Up to {room.guests} guests</p>
          <p>Free WiFi & breakfast</p>
          <p>No payment needed now</p>
          <Link to={"/booking/" + room.id} className="btn btn-gold">Book This Room</Link>
        </div>
      </div>
    </div>
  );
}

export default RoomDetails;
