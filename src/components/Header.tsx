type NavLinkProps = {
  text: string;
  href: string;
};

function NavLink({ text, href }: NavLinkProps) {
  return (
    <a href={href} className="navigation-link">
      {text}
    </a>
  );
}

function Header() {
  const navigationLinks = [
    { text: "Home", href: "#home" },
    { text: "Technologies", href: "#technologies" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
    { text: "Contact", href: "#contact" },
  ];

  return (
    <header className="header">
      <div className="logo">
        <span>&lt;/&gt;</span>
        <span>Dev Stack</span>
      </div>

      <nav className="navigation">
        {navigationLinks.map((link) => (
          <NavLink
            key={link.href}
            text={link.text}
            href={link.href}
          />
        ))}
      </nav>

      <div className="auth-buttons">
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;