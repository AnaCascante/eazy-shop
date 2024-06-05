
import Header from '../Header';
import Logo from '../Logo';
import NavBar from '../NavBar';
import './index.css';
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from '../../pages/Homepage';

import ProductPage from '../../pages/Productpage'; 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
  },
  {
    path: "/",
    element: <Logo />,
  },
  {
    path: "/",
    element: <NavBar />,
  },
  {
    path: "/",
    element: <ProductPage />, 
  }
]);

function App() {
  return (
   <RouterProvider router ={router}>     
    <div>
      <Header />
      <Logo />
      <NavBar />  
    </div>
    </RouterProvider>
  );
}

export default App;















/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      hello world
    </>
  )
}

export default App */
