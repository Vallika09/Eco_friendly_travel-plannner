import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <i className="fas fa-leaf"></i>
            <span>EcoTravel</span>
          </Link>

          <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <ul className="nav-links">
              <li><Link to="/" onClick={closeMenu}>Home</Link></li>
              <li><Link to="/destinations" onClick={closeMenu}>Destinations</Link></li>
              <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
              <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
              <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            </ul>

            <div className="nav-buttons">
              <button
                className="btn btn-outline"
                onClick={() => {
                  navigate("/login");
                  closeMenu();
                }}
              >
                Log In
              </button>
              <button
                className="btn btn-primary"
                onClick={() => {
                  navigate("/register");
                  closeMenu();
                }}
              >
                Sign Up
              </button>
            </div>
          </nav>

          <button
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-links">
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/destinations" onClick={closeMenu}>Destinations</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
            <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
          </ul>

          <div className="mobile-buttons">
            <button
              className="btn btn-outline"
              onClick={() => {
                navigate("/login");
                closeMenu();
              }}
            >
              Log In
            </button>
            <button
              className="btn btn-primary"
              onClick={() => {
                navigate("/register");
                closeMenu();
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
