import React, { useState } from 'react';

import './TopArea.scss';

import MobileMenu from '@components/HeaderComponents/MobileMenu';

import { IoMdClose, IoMdMenu } from 'react-icons/io';
import DesktopMenu from '@components/HeaderComponents/DesktopMenu';
import { ILinkNavigation } from '@features/home/Types';

interface props {
  logo: string | undefined;
  menu: ILinkNavigation[] | undefined;
}

export default function TopArea({logo, menu}: props) {
  const [opened, setOpened] = useState(false);

  if (!logo || !menu) return;

  return (
    <section className="TopArea" id="inicio">
      <div className="TopArea__container">
        <img src={logo} alt="Logo MdsystemWeb" />
        {!opened ? (
          <IoMdMenu
            className="TopArea__menu-icon"
            onClick={() => setOpened(true)}
          />
        ) : (
          <IoMdClose
            className="TopArea__menu-icon"
            onClick={() => setOpened(false)}
          />
        )}
        <DesktopMenu menu={menu} />
      </div>
      {opened && <MobileMenu menu={menu}/>}
    </section>
  );
}
