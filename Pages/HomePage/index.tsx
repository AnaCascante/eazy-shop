import { getProducts } from "../../src/Api";
import NavBar from "../../src/components/NavBar";
import SearchBar from "../../src/components/Searchbar";
import ProductCard from "../../src/components/ProductCard";

interface Product {
  // Define the properties of a Product object
  // For example:
  id: number;
  name: string;
  price: number;
}

function HomePage() {

  // importer productCard component 
  return (
    <div>
      <NavBar />
      <h1>Hola que tal </h1>
      {/* <SearchBar /> */}
      <ProductCard product={{price: 9.99 }} /> 
     
    </div>
  );
}   
export default HomePage; 