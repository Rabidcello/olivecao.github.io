import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Style.css'; // Ensure your styles are applied

const Navbar = () => (
  <header>
    <nav className="navbar">
      <Link to="/" className="nav-link">About Me</Link> {/* Home Link */}
      <Link to="/projects" className="nav-link">Projects</Link> {/* Projects Link */}
      <Link to="/resume" className="nav-link">Resume</Link> {/* Optional: Same as above */}
    </nav>
  </header>
);

export default Navbar;
