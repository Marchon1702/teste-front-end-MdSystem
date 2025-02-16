import React, {useState} from 'react';
import SectionsTitle from '../SectionsTitle';

import './About.scss';
import {IAboutResponse, ILinkNavigation} from '@features/home/Types';

import { MDXProvider } from "@mdx-js/react";
import htmlToMd from "html-to-md";
import MainArticle from '../MainArticle';

interface Props {
  aboutContent: IAboutResponse[];
  tracker: ILinkNavigation[]
}

export default function About({aboutContent, tracker}: Props) {
  if (!aboutContent || !tracker) return;

  const [activeIndex, setActiveIndex] = useState(0);
  const [textToShow, setTextToShow] = useState(aboutContent[0].description);

  return (
    <section className="About" id={tracker[0].link}>
      <SectionsTitle title="Sobre nós" />
      <div className="About__content">
        <nav className="About__topics">
          {aboutContent.map((item, index) => (
            <li
              key={index}
              className={`About__item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => {
                setActiveIndex(index);
                setTextToShow(item.description);
              }}>
              {item.label}
            </li>
          ))}
        </nav>
        <MainArticle>
          <MDXProvider>
            <div className="About__text">{htmlToMd(textToShow)}</div>
          </MDXProvider>
        </MainArticle>
      </div>
    </section>
  );
}
