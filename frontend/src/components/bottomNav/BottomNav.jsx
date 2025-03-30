import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HiHome } from "react-icons/hi2";
import { FaImage } from 'react-icons/fa6';
import { FaPeopleGroup } from "react-icons/fa6";
import { RiContactsBookFill } from "react-icons/ri";
import { FaBagShopping } from 'react-icons/fa6';

import './bottomNav.css';

const bottomNavItems = [
  {
    title: 'Home',
    path: "/",
    icon: <HiHome  className="icon-default" />,
    activeIcon: <HiHome  className="icon-active" />,
  },
  {
    title: 'Shop',
    path: "/shop",
    icon: <FaBagShopping   className="icon-default" />,
    activeIcon: <FaBagShopping   className="icon-active" />,
  },
  {
    title: 'Gallery',
    path: "/gallery",
    icon: <FaImage className="icon-default" />,
    activeIcon: <FaImage className="icon-active" />,
  },
  {
    title: 'Contact',
    path: "/contact",
    icon: <RiContactsBookFill className="icon-default" />,
    activeIcon: <RiContactsBookFill className="icon-active" />,
  },
];

const BottomNav = () => {
  const location = useLocation(); // Get the current path
  const [activePath, setActivePath] = useState(location.pathname);

  const handleItemClick = (item) => {
    if (item.onClick) {
      item.onClick();
    }
    setActivePath(item.path);
  };

  return (
    <div className="mobile bg-primary-light">
      {bottomNavItems.map((item) => (
        <NavLink
          key={item.title}
          to={item.path}
          className={`nav-item ${activePath === item.path ? 'active' : ''}`}
          onClick={() => handleItemClick(item)}
        >
          <div className="icon">
            {activePath === item.path ? item.activeIcon : item.icon}
          </div>
          <span className="label">
            {item.title}
          </span>
        </NavLink>
      ))}
    </div>
  );
};

export default BottomNav;
