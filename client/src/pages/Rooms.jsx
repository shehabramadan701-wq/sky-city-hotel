import RoomCard from "../components/RoomCard";
import rooms from "../data/rooms";

function Rooms() {
  return (
    <div>
      <section className="page-header rooms-header">
        <h1>Our Rooms</h1>
        <p>Choose the room that fits your trip</p>
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
