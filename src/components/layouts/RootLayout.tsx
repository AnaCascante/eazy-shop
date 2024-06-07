import { NavLink, Outlet } from 'react-router-dom';

import Logo from '../Logo';

export default function RootLayout() {
  return (
    <div className="flex flex-row root-layout">
   
    <main>
        <Outlet />
    </main>
  </div>
  )
}
