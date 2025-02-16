import {ILinkNavigation, IServiceResponse} from '@features/home/Types';
import React, {useState} from 'react';
import SectionsTitle from '../SectionsTitle';

import './AllServices.scss';
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa';
import MainArticle from '../MainArticle';

interface props {
  servicesContent: IServiceResponse[];
  tracker: ILinkNavigation[];
}

export default function AllServices({servicesContent, tracker}: props) {
  if (!servicesContent || !tracker) return;

  const [index, setIndex] = useState(0);

  function nextText() {
    setIndex(prevIndex => {
      if (prevIndex + 1 >= servicesContent.length) {
        return 0;
      }
      return prevIndex + 1;
    });
  }

  function backText() {
    setIndex(prevIndex => {
      if (prevIndex - 1 < 0) {
        return servicesContent.length - 1;
      }
      return prevIndex - 1;
    });
  }

  return (
    <section className="AllServices" id={tracker[1].link}>
      <SectionsTitle title="Serviços" />
      <MainArticle>
        <article className="AllServices__carousel">
          <FaArrowCircleLeft
            className="AllServices__arrow"
            onClick={backText}
          />
          <p className="AllServices__text">{servicesContent[index].text}</p>
          <FaArrowCircleRight
            className="AllServices__arrow"
            onClick={nextText}
          />
        </article>
      </MainArticle>
    </section>
  );
}
