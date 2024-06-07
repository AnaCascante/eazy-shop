
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
 } from 'react-router-dom';

//imported pages
import HomePage from './Pages/HomePage';  
import ContactPage from './Pages/ContactPage';
import CheckoutPage from './Pages/CheckoutPage';
import CheckoutsucessPagePage from './Pages/CheckoutsuccessPage';

// imported components
import RootLayout from './components/layouts/RootLayout';
import NavBar from './components/NavBar';
import OpenCard from './components/OpenCard';
import SearchBar from './components/SearchBar';
import Logo from './components/Logo';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import ProductList from './components/ProductList';




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path= "/" element = {<RootLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path="/ContactPage" element={<ContactPage/>} />
      <Route path="/CheckoutPage" element={<CheckoutPage/>} />
    </Route>
  ));

function App() {
  return (
      <RouterProvider router={router}/>
  );
}


export default App;

