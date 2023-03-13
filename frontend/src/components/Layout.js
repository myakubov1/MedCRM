/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import { useState } from 'react';
import TopNavbar from './TopNavbar';
import LeftSidebar from './LeftSidebar';
import '../App.css';

function Layout({ children }) {
  const [isActive, setActive] = useState(false);
  return (
    <div className="content">
      <LeftSidebar isActive={isActive} />
      <TopNavbar />
      {children}
    </div>
  );
}

export default Layout;
