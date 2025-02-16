import React from 'react';

import './Banner.scss';
import {IBannerResponse} from '@features/home/Types';

interface props {
  bannerContent: IBannerResponse | null | undefined;
}

export default function Banner({bannerContent}: props) {
  if (!bannerContent) return;

  return (
    <section className="Banner">
      <div className="Banner__blue-wrapper">
        <div className="Banner__content">
          <h2 className="Banner__title">{bannerContent.title}</h2>
          <span className="Banner__subtitle">{bannerContent.subtitle}</span>
          <a href={bannerContent.href} target="blank">
            <button className="Banner__button">{bannerContent.button}</button>
          </a>
        </div>
      </div>
    </section>
  );
}
