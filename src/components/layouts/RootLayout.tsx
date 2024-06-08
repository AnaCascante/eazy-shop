import { NavLink, Outlet } from 'react-router-dom';

import Logo from '../Logo';

export default function RootLayout() {
  return (
    <div className="align-baseline">
    
    <main>
        <Outlet />
    </main>
  </div>
  )
}
