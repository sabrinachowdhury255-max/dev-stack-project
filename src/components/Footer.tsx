function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <span>&lt;/&gt;</span>
            <span>Dev Stack</span>
          </div>

          <p>
            Build your developer stack with the technologies
            you need for modern web development.
          </p>
        </div>

        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#technologies">Technologies</a>
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Dev Stack. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;