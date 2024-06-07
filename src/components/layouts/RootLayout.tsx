import { NavLink, Outlet } from 'react-router-dom';

import Logo from '../Logo';

export default function RootLayout() {
  return (
    <div className="root-layout">
    <header>
    <nav>         
        <h1><Logo/></h1>
          <NavLink to="/">Home</NavLink>
          <NavLink to="contact">Contact</NavLink>
    </nav>
  </header>
    <main>
        <Outlet />
    </main>
  </div>
  )
}
