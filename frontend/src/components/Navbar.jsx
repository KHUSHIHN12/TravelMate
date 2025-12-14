import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">TravelMate</div>

      <div className="nav-links">
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/destinations" className="nav-item">Destination</Link>
        <Link to="/login" className="nav-item">Sign Up</Link>
        <Link to="/about" className="nav-item">About</Link>
      </div>
    </nav>
  );
}

export default Navbar;
