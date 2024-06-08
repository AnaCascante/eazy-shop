
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
 } from 'react-router-dom';

//imported pages
import HomePage from '../Pages/HomePage'; 
import ContactPage from '../Pages/ContactPage';
import CheckoutPage from '../Pages/CheckoutPage';
import CheckoutsucessPagePage from '../Pages/CheckoutsuccessPage';
import RootLayout from './components/layouts/RootLayout';


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

