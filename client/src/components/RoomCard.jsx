import { Link } from "react-router-dom";
import { FiUsers, FiMaximize } from "react-icons/fi";
import { IoBedOutline } from "react-icons/io5";
import "./RoomCard.css";

// كارت غرفة واحدة - بياخد الغرفة في props
function RoomCard({ room }) {
  return (
    <div className="room-card">
      <Link to={"/rooms/" + room.id} className="room-card-img">
        <img src={room.images[0]} alt={room.name} />
        <span className="room-card-price">
          <del>${room.oldPrice}</del> ${room.price} / night
        </span>
      </Link>

      <div className="room-card-body">
        <h3>{room.name}</h3>

        <div className="room-card-info">
          <span><FiUsers /> {room.guests} adults</span>
          <span><FiMaximize /> {room.size} m²</span>
          <span><IoBedOutline /> {room.beds}</span>
        </div>

        <p className="room-card-note">Breakfast included · Free cancellation</p>

        <Link to={"/rooms/" + room.id} className="btn btn-gold room-card-btn">
          View & Reserve
        </Link>
      </div>
    </div>
  );
}

export default RoomCard;
