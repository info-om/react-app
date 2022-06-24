import { Link, Outlet } from "react-router-dom";
import "../css/Header.css";
function Header() {
  return (
    <nav>
      <Link to="home">Home</Link>

      <Link to="about">About</Link>
      <Link to="contact">Contact</Link>
      <button className="login-button">Login</button>
      <Outlet />
    </nav>
  );
}
export default Header;
