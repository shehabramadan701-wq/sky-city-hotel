import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import "./Navbar.css";

function Navbar() {
  // القائمة مفتوحة ولا مقفولة (في الموبايل)
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="logo" onClick={closeMenu}>
          <span className="logo-mark">SC</span>
          <span className="logo-text">Sky City Apartments</span>
        </Link>

        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <NavLink to="/" onClick={closeMenu}>Home</NavLink>
          <NavLink to="/rooms" onClick={closeMenu}>Suites</NavLink>
          <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
          <NavLink to="/login" onClick={closeMenu}>Login</NavLink>
          <Link to="/signup" className="btn btn-gold" onClick={closeMenu}>Sign Up</Link>
        </nav>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
    </header>
  );
}

export default Navbar;
