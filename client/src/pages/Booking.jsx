import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import rooms from "../data/rooms";
import "./Booking.css";

function Booking() {
  // لو جاي من غرفة معينة هيبقى فيه رقم  مثلا: /booking/3
  const { id } = useParams();

  // بيانات الفورم
  const [roomId, setRoomId] = useState(id || "");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");

  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  // الغرفة اللي اختارها
  const room = rooms.find((r) => r.id == roomId);

  // عدد الليالي
  let nights = 0;
  if (checkIn && checkOut) {
    nights = (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24);
  }

  // السعر الكلي
  let total = 0;
  if (room && nights > 0) {
    total = room.price * nights;
  }

  function handleSubmit(e) {
    e.preventDefault(); // متعملش refresh للصفحة

    if (nights <= 0) {
      setError("Check-out must be after check-in");
      return;
    }

    if (guests > room.guests) {
      setError("This room is for " + room.guests + " guests only");
      return;
    }

    const booking = {
      room_id: roomId,
      check_in: checkIn,
      check_out: checkOut,
      guests: guests,
      full_name: name,
      email: email,
      phone: phone,
      notes: notes,
      total_price: total,
    };

    console.log(booking);
    // TODO: هنا هنبعت الحجز للباك اند (شوف README.md)

    setError("");
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
              <p><span>Room</span> <strong>{room.name}</strong></p>
              <p><span>Dates</span> <strong>{checkIn} → {checkOut}</strong></p>
              <p><span>Total</span> <strong>${total}</strong></p>
            </div>

            <Link to="/" className="btn btn-gold">Back to Home</Link>
          </div>
        </div>
      </div>
    );
  }

  // ===== الفورم =====
  return (
    <div className="booking-page">
      <div className="container">
        <span className="small-title">Reservation</span>
        <h1 className="booking-title">Book your stay</h1>

        <div className="booking-grid">
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="input-box full">
              <label>Room</label>
              <select value={roomId} onChange={(e) => setRoomId(e.target.value)} required>
                <option value="">Choose a room</option>
                {rooms.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name} - ${r.price}/night
                  </option>
                ))}
              </select>
            </div>

            <div className="input-box">
              <label>Check-in</label>
              <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} required />
            </div>

            <div className="input-box">
              <label>Check-out</label>
              <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} required />
            </div>

            <div className="input-box">
              <label>Guests</label>
              <input type="number" min="1" value={guests} onChange={(e) => setGuests(e.target.value)} required />
            </div>

            <div className="input-box">
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
              <label>Notes (optional)</label>
              <textarea rows="3" value={notes} onChange={(e) => setNotes(e.target.value)} />
            </div>

            {error && <p className="error full">{error}</p>}

            <button type="submit" className="btn btn-gold full">Confirm Booking</button>
          </form>

          {/* ===== ملخص الحجز ===== */}
          <div className="summary">
            {room ? (
              <div>
                <img src={room.images[0]} alt={room.name} />
                <div className="summary-body">
                  <h3>{room.name}</h3>
                  <p><span>Price</span> <span>${room.price} / night</span></p>
                  <p><span>Nights</span> <span>{nights > 0 ? nights : "-"}</span></p>
                  <p className="summary-total"><span>Total</span> <span>${total}</span></p>
                </div>
              </div>
            ) : (
              <div className="summary-body">
                <h3>Booking summary</h3>
                <p>Choose a room to see the price</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Booking;
