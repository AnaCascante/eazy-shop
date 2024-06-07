import NavBar from "../../components/NavBar";
import Search from "../../components/Searchbar";

function HomePage() {
  return (
    <div>
      <NavBar />
      <h1>Hello You!</h1>
      <div><Search/> </div>
      {/* display home page content here */}
    </div>
  );
}   
export default HomePage;