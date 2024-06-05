import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="text-blue w-1/3">
      <ul>
        <li>
         <Link to="/">Home page</Link> 
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;