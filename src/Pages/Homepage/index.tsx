// imported libraries
import React, {useEffect} from "react";  
import axios from "axios";


// imported components 
import NavBar from "../../components/NavBar";
import SearchBar from "../../components/Searchbar";
import ProductCard from "../../components/ProductCard";

const HomePage = () => {
  // state variables
  const [products, setProducts] = React.useState([]);
  const [search, setSearch] = React.useState("");
  const [filteredProducts, setFilteredProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  // fetch data from API
  useEffect(() => {
    axios
      .get("{URL_PRODUCTS}")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log('Error fetching products:', err);
      });
  }, []);
 

// HomePage component
  return (
    <div>
      <NavBar />
      <h1>Hola que tal </h1>
      <SearchBar />
      {/* display home page content here */}
    </div>  );

  }
export default HomePage;