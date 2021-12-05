import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav >
      <h1>Test Navi</h1>
      <div >
        <Link to="/">Home</Link>
        <Link to="/aboutMe">About Me</Link>
        <Link to="/projects">Projects</Link>
      </div>
    </nav>
  );
}
 
export default Navbar;