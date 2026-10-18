import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import rooms from "../data/rooms";
import "./Booking.css";

function Booking() {
  // البيانات اللي جاية من صفحة الغرفة (التواريخ والحساب)
  const location = useLocation();
  const data = location.state;

  // بيانات العميل
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [done, setDone] = useState(false);

  // لو دخل الصفحة دي من غير ما يختار غرفة
  if (!data) {
    return (
      <div className="booking-page">
        <div className="container empty-booking">
          <h2>No suite selected</h2>
          <p>Please choose a suite and your dates first.</p>
          <Link to="/rooms" className="btn btn-gold">Choose a Suite</Link>
        </div>
      </div>
    );
  }

  const room = rooms.find((r) => r.id == data.roomId);

  function handleSubmit(e) {
    e.preventDefault(); // متعملش refresh للصفحة

    const booking = {
      room_id: room.id,
      check_in: data.checkIn,
      check_out: data.checkOut,
      guests: data.guests,
      full_name: name,
      email: email,
      phone: phone,
      notes: notes,
      total_price: data.total,
    };

    console.log(booking);
    // TODO: هنا هنبعت الحجز للباك اند (شوف README.md)

    setDone(true);
  }

  // ===== بعد ما الحجز يتم =====
  if (done) {
    return (
      <div className="booking-page">
        <div className="container">
          <div className="success">
            <FiCheckCircle className="success-icon" />
            <h1>Thank you, {name}!</h1>
            <p>We received your booking and will contact you at {email}</p>

            <div className="success-info">
              <p><span>Suite</span> <strong>{room.name}</strong></p>
              <p><span>Check-in</span> <strong>{data.checkIn}</strong></p>
              <p><span>Check-out</span> <strong>{data.checkOut}</strong></p>
              <p><span>Total</span> <strong>${data.total}</strong></p>
            </div>

            <Link to="/" className="btn btn-gold">Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  // ===== الصفحة =====
  return (
    <div className="booking-page">
      <div className="container">
        <span className="small-title">Almost done</span>
        <h1 className="booking-title">Complete your booking</h1>

        <div className="booking-grid">
          {/* ===== بيانات العميل ===== */}
          <form className="booking-form" onSubmit={handleSubmit}>
            <h3 className="full">Your details</h3>

            <div className="input-box full">
              <label>Full name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>

            <div className="input-box">
              <label>Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="input-box">
              <label>Phone</label>
              <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>

            <div className="input-box full">
              <label>Special requests (optional)</label>
              <textarea rows="3" value={notes} onChange={(e) => setNotes(e.target.value)} />
            </div>

            <button type="submit" className="btn btn-gold full">Confirm Booking</button>
          </form>

          {/* ===== ملخص الحجز ===== */}
          <div className="summary">
            <img src={room.images[0]} alt={room.name} />
            <div className="summary-body">
              <h3>{room.name}</h3>
              <p><span>Check-in</span> <span>{data.checkIn}</span></p>
              <p><span>Check-out</span> <span>{data.checkOut}</span></p>
              <p><span>Guests</span> <span>{data.guests}</span></p>
              <p><span>${room.price} × {data.nights} nights</span> <span>${room.price * data.nights}</span></p>
              <p><span>Taxes and fees</span> <span>${room.taxes * data.nights}</span></p>
              <p className="summary-total"><span>Total</span> <span>${data.total}</span></p>
              <p className="summary-green">✓ Breakfast included · Free cancellation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
