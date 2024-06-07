import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="flex flex-row justify-between max-h-12">
      <ul>
        <li>
         <Link to="/">Home</Link> 
        </li>
      </ul>
    </nav>
  );
}

export default NavBar; 