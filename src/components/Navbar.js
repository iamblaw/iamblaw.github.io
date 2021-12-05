import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div >
        <Link to="/">Home</Link>
        <Link to="/aboutMe">About Me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contactMe">Contact Me</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;