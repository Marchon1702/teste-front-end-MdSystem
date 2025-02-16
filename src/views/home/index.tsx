import React from 'react';

import HeaderContainer from '@features/home/HeaderContainer';
import MainContainer from '@features/home/MainContainer';
import FooterContainer from '@features/home/FooterContainer';

import './index.scss';

const HomeView = (): JSX.Element => (
  <div className="HomeView">
    <HeaderContainer />
    <MainContainer />
    <FooterContainer />
  </div>
);

export default HomeView;
