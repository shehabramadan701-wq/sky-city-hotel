import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import RoomDetails from "./pages/RoomDetails";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

import hotel from "./data/hotel";

function App() {
  const location = useLocation();

  // لما تغير الصفحة، اطلع لأول الصفحة
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/:id" element={<RoomDetails />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />

      {/* زرار الواتساب */}
      <a className="whatsapp-btn" href={"https://wa.me/" + hotel.whatsapp} target="_blank">
        <FaWhatsapp />
      </a>
    </div>
  );
}

export default App;
