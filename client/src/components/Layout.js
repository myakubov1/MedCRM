import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopNavbar from './TopNavbar';
import LeftSidebar from './LeftSidebar';
import '../App.css';

function Layout() {
  const [isActive, setActive] = useState(false);
  return (
    <>
      <LeftSidebar isActive={isActive} />
      <div className="content">
        <TopNavbar />
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
