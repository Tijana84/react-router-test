import { Link } from "react-router-dom";
import './index.css';

const NavBar = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about-as">AboutUs</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default NavBar;
