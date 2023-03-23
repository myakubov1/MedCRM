import { useState } from 'react';
import { Link } from 'react-router-dom';

function MenuList() {
  const [menuList, setMenuList] = useState(['Dashboard', 'Testpage']);
  const [isActive, setActive] = useState();
  return (
  // eslint-disable-next-line react/no-array-index-key
    menuList.map((menu, index) => <Menu key={index} href={menu} />)
  );
}

function Menu({ href }) {
  return (
    <div className="navbar-nav w-100">
      <Link to={`/${href.toLowerCase()}`} className="nav-item nav-link">
        <i className="fa fa-tachometer-alt me-2" />
        {href}
      </Link>
    </div>
  );
}

export default MenuList;
