import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="navbar">

      <div className="navbar-logo">
        <h2>Elementum</h2>
      </div>

      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/">Studio</a></li>
          <li><a href="/">Services</a></li>
          <li><a href="/">Contact</a></li>
          <li><a href="/">FAQ's</a></li>
        </ul>
      </nav>

    </header>
  );
};

export default Navbar;