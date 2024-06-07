import NavBar from "../../components/NavBar";
import SearchBar from "../../components/Searchbar";
import Search from "../../components/Searchbar";

function HomePage() {
  return (
    <div>
      <NavBar />
      <h1>Hola que tal </h1>
      <SearchBar />
      {/* display home page content here */}
    </div>
  );
}   
export default HomePage;