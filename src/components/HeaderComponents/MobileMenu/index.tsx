import React from 'react';

import {Link} from 'react-scroll';

import './MobileMenu.scss';
import '../../../stylesheets/animations.scss';
import { ILinkNavigation } from '@features/home/Types';

interface props {
  menu: ILinkNavigation[]
}

export default function MobileMenu({menu}: props) {

  return (
    <nav className={`MobileMenu`}>
      <span className="MobileMenu__row-bar"></span>
      {menu.map(item => (
        <Link
          key={item.link}
          to={item.link}
          smooth={true}
          duration={400}
          className="MobileMenu__link">
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
