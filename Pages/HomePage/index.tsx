import { getProducts } from "../../src/Api";
import NavBar from "../../src/components/NavBar";
import SearchBar from "../../src/components/Searchbar";
import ProductCard from "../../src/components/ProductCard";

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