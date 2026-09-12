function Header() {
  return (
    <header className="header">
      <div className="logo">
        <span>&lt;/&gt;</span>
        <span>Dev Stack</span>
      </div>

      <nav className="navigation">
        <a href="#home">Home</a>
        <a href="#technologies">Technologies</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>

      <div className="auth-buttons">
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;