import {
  createBrowserRouter,
  Route,
  createRoutesFromElement,
  RouterProvider
 } from 'react-router-dom';

//pages
import HomePage from './Pages/HomePage';  
import ContactPage from './Pages/ContactPage';
import RootLayout from './components/layouts/RootLayout';

const router = createBrowserRouter(
  createRoutesFromElement(
    <Route path= "/" element = {<RootLayout/>}>
      <Route index element={<HomePage/>}/>
      <Route path="/contact" element={<ContactPage/>} />
    </Route>
  ));

function App() {
  return (
      <RouterProvider router={router}/>
  );
}

export default App;