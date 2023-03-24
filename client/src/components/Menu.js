import { useState } from 'react';
import { Link } from 'react-router-dom';

function MenuList() {
  const [menuList, setMenuList] = useState(['Dashboard', 'Testpage','Clients']);
  const [icons, setIcons] = useState(['fas fa-th', 'fa fa-chart-bar','fa fa-chart-bar']);
  const [isActive, setActive] = useState();
  return (
  // eslint-disable-next-line react/no-array-index-key
    menuList.map((menu, index) => <Menu key={index} href={menu} icon={icons[index]} />)

  );
}

function Menu({ href, icon }) {
  return (
    <div className="navbar-nav w-100">
      <Link  to={`/${href.toLowerCase()}`} className="nav-item nav-link">
          <i className={icon + ' me-2'}></i>
        {href}
      </Link>
    </div>
  );
}

export default MenuList;
