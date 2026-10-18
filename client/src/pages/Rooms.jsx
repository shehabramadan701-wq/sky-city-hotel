import RoomCard from "../components/RoomCard";
import rooms from "../data/rooms";

function Rooms() {
  return (
    <div>
      <section
        className="page-header"
        style={{
          backgroundImage:
            "linear-gradient(rgba(15,27,45,0.75), rgba(15,27,45,0.85)), url(images/rooms/deluxe-1.webp)",
        }}
      >
        <h1>Our Suites</h1>
        <p>Every suite has a private kitchen and breakfast included</p>
      </section>

      <section className="section bg-cream">
        <div className="container">
          <div className="rooms-grid">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Rooms;
