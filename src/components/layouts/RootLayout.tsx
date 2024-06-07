import { NavLink, Outlet } from 'react-router-dom';

import Logo from '../Logo';

export default function RootLayout() {
  return (
    <div className="root-layout flex flex-row flex-nowrap align-baseline justify-end space-x-4 m-10 ">
   
    <main>
        <Outlet />
    </main>
  </div>
  )
}
