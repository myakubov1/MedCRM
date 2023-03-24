import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import TopNavbar from './TopNavbar';
import LeftSidebar from './LeftSidebar';
import '../../App.css';
import Footer from './Footer';

function Layout() {
  const [isActive, setActive] = useState(false);
  return (
    <>
      <LeftSidebar isActive={isActive} />
      <div className="content d-flex flex-column h-100">
        <TopNavbar />
        <Outlet />
        <Footer/>
      </div>
    </>
  );
}

export default Layout;
