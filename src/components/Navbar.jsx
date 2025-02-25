import { Link } from "react-router-dom";
import "../styles/navbar.css"; // Import Navbar CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <img src="/src/assets/images/logo.png" alt="Logo" />
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/destination">Destinations</Link>
          <Link to="/itinerary">Itinerary</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/Login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;