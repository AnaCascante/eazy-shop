import { getProducts } from "../../Api";
import NavBar from "../../components/NavBar";
import SearchBar from "../../components/Searchbar";
import ProductCard from "../../components/ProductCard";

function HomePage() {

  // importer productCard component 
  return (
    <div>
      <NavBar />
      <h1>Hola que tal </h1>
      {/* <SearchBar /> */}
      <ProductCard /> 
      {/* display home page content here */}
    </div>
  );
}   
export default HomePage;