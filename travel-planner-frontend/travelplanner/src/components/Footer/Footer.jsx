import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <a href="/" className="footer-logo">
              <i className="fas fa-leaf"></i>
              <span>EcoTravel</span>
            </a>
            <p>Making sustainable travel accessible and enjoyable for everyone.</p>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="/">Home</a>
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
          </div>

          <div className="footer-column">
            <h3>Resources</h3>
            <ul className="footer-links">
              <li>
                <a href="/carbon-calculator">Carbon Calculator</a>
              </li>
              <li>
                <a href="/eco-travel-guide">Eco Travel Guide</a>
              </li>
              <li>
                <a href="/sustainable-tips">Sustainable Travel Tips</a>
              </li>
              <li>
                <a href="/partners">Partner Directory</a>
              </li>
              <li>
                <a href="/faq">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Subscribe</h3>
            <p>Get eco-travel tips and exclusive offers delivered to your inbox.</p>
            <div className="subscribe-form">
              <div className="input-icon">
                <i className="fas fa-envelope"></i>
                <input type="email" placeholder="Your email" />
              </div>
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} EcoTravel. All rights reserved.</p>
          <div className="footer-legal">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/cookies">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

