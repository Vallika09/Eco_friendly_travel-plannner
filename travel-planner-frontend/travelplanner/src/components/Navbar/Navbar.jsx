"use client"

import { useState, useEffect } from "react"
import "./Navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isMenuOpen])

  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-content">
          <a href="/" className="logo">
            <i className="fas fa-leaf"></i>
            <span>EcoTravel</span>
          </a>

          <nav className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
            <ul className="nav-links">
              <li>
                <a href="/" className="active">
                  Home
                </a>
              </li>
              <li>
                <a href="/destinations">Destinations</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/blog">Blog</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
            <div className="nav-buttons">
              <button className="btn btn-outline">Log In</button>
              <button className="btn btn-primary">Sign Up</button>
            </div>
          </nav>

          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-links">
            <li>
              <a href="/" className="active" onClick={() => setIsMenuOpen(false)}>
                Home
              </a>
            </li>
            <li>
              <a href="/destinations" onClick={() => setIsMenuOpen(false)}>
                Destinations
              </a>
            </li>
            <li>
              <a href="/about" onClick={() => setIsMenuOpen(false)}>
                About Us
              </a>
            </li>
            <li>
              <a href="/blog" onClick={() => setIsMenuOpen(false)}>
                Blog
              </a>
            </li>
            <li>
              <a href="/contact" onClick={() => setIsMenuOpen(false)}>
                Contact
              </a>
            </li>
          </ul>
          <div className="mobile-buttons">
            <button className="btn btn-outline">Log In</button>
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar

