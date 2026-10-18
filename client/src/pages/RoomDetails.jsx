import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FiUsers, FiMaximize, FiCheck } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import rooms from "../data/rooms";
import "./RoomDetails.css";

function RoomDetails() {
  // رقم الغرفة من الرابط  مثلا: /rooms/2
  const { id } = useParams();
  const navigate = useNavigate();

  // دوّر على الغرفة اللي ليها نفس الرقم
  const room = rooms.find((r) => r.id == id);

  // الصورة الكبيرة اللي ظاهرة دلوقتي
  const [mainImage, setMainImage] = useState(0);

  // بيانات الحجز
  const [showReserve, setShowReserve] = useState(false);
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);

  if (!room) {
    return (
      <div className="container details-page">
        <h2>Suite not found</h2>
        <Link to="/rooms" className="btn btn-dark">Back to Suites</Link>
      </div>
    );
  }

  // النهارده (عشان ميختارش يوم فات)
  const today = new Date().toISOString().slice(0, 10);

  // عدد الليالي
  let nights = 0;
  if (checkIn && checkOut) {
    nights = (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24);
  }

  // الحساب
  const roomTotal = room.price * nights;
  const taxesTotal = room.taxes * nights;
  const total = roomTotal + taxesTotal;

  // يروح لصفحة الحجز ومعاه البيانات
  function goToBooking() {
    navigate("/booking", {
      state: {
        roomId: room.id,
        checkIn: checkIn,
        checkOut: checkOut,
        guests: guests,
        nights: nights,
        total: total,
      },
    });
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
                key={image}
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
            <div><FiUsers /><span>Sleeps</span><strong>{room.guests} adults</strong></div>
            <div><IoBedOutline /><span>Beds</span><strong>{room.beds}</strong></div>
          </div>

          <h3>About this suite</h3>
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
          <p className="book-price">
            <del>${room.oldPrice}</del> ${room.price} <span>/ night</span>
          </p>
          <p className="book-taxes">+ ${room.taxes} taxes and fees per night</p>
          <p className="book-green">✓ Breakfast included</p>
          <p className="book-green">✓ Free cancellation</p>

          {/* قبل ما يدوس Reserve */}
          {!showReserve && (
            <button className="btn btn-gold" onClick={() => setShowReserve(true)}>
              Reserve
            </button>
          )}

          {/* بعد ما يدوس Reserve */}
          {showReserve && (
            <div className="reserve-form">
              <div className="input-box">
                <label>Check-in</label>
                <input type="date" min={today} value={checkIn} onChange={(e) => setCheckIn(e.target.value)} />
              </div>

              <div className="input-box">
                <label>Check-out</label>
                <input type="date" min={checkIn || today} value={checkOut} onChange={(e) => setCheckOut(e.target.value)} />
              </div>

              <div className="input-box">
                <label>Guests</label>
                <select value={guests} onChange={(e) => setGuests(e.target.value)}>
                  <option value="1">1 adult</option>
                  <option value="2">2 adults</option>
                </select>
              </div>

              {/* الحساب يظهر لما يختار التواريخ */}
              {nights > 0 && (
                <div className="price-list">
                  <p><span>${room.price} × {nights} {nights === 1 ? "night" : "nights"}</span> <span>${roomTotal}</span></p>
                  <p><span>Taxes and fees</span> <span>${taxesTotal}</span></p>
                  <p className="price-total"><span>Total</span> <span>${total}</span></p>
                </div>
              )}

              <button className="btn btn-gold" onClick={goToBooking} disabled={nights <= 0}>
                Continue
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default RoomDetails;
