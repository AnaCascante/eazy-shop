import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Logo from "../Logo";


function NavBar() {
  return (
    <nav className="flex flex-row flex-nowrap ">
        <Logo/>
         <NavLink to="/" className="hover:text-gray-400">Home</NavLink>
         <NavLink to="/ContactPage" className="hover:text-gray-400">Contact</NavLink> 
         <NavLink to="/CheckoutPage" className="hover:text-gray-400"><FaShoppingCart /></NavLink>
    </nav>
  );
}

export default NavBar; 