import { useState } from 'react';

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
      <a href={href} className="nav-item nav-link">
        <i className="fa fa-tachometer-alt me-2" />
        {href}
      </a>
    </div>
  );
}

export default MenuList;
