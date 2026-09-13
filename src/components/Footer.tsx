function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Brand */}
        <div className="footer-brand">
          <a className="footer-logo" href="#home">
            <span>&lt;/&gt;</span>
            <span>Dev Stack</span>
          </a>

          <p>
            Build your developer stack with the technologies
            you need for modern web development.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="GitHub">
              GitHub
            </a>

            <a href="#" aria-label="Twitter">
              Twitter
            </a>

            <a href="#" aria-label="LinkedIn">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Product */}
        <div className="footer-column">
          <h3>Product</h3>

          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#stack">Your Stack</a>
        </div>

        {/* Company */}
        <div className="footer-column">
          <h3>Company</h3>

          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#home">Home</a>
        </div>

        {/* Legal */}
        <div className="footer-column">
          <h3>Legal</h3>

          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Dev Stack. All rights reserved.</p>

        <div className="footer-bottom-links">
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;