import React from 'react';

import {ILinkNavigation} from '@features/home/Types';
import {Link} from 'react-scroll';

import './DesktopMenu.scss';

interface props {
  menu: ILinkNavigation[];
}

export default function DesktopMenu({menu}: props) {
  return (
    <nav className="DesktopMenu">
      {menu.map((item, index) => {
        if (index > 1) return;

        return (
          <Link
            key={item.link}
            to={item.link}
            smooth={true}
            duration={400}
            className="MobileMenu__link">
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
