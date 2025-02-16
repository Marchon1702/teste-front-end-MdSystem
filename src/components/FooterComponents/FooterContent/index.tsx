import React from 'react';
import './FooterContent.scss';
import { Link } from 'react-scroll';
import { ILinkNavigation } from '@features/home/Types';

interface props {
  tracker: ILinkNavigation[]
}

export function FooterContent({tracker}: props) {

  if(!tracker) return;

  return (
    <section className="FooterContent" id="contato">
      <div className="FooterContent__infos">
        <div className="FooterContent__list">
          <h3 className="FooterContent__listTitle">Contatos</h3>
          <ul className="FooterContent__ul-infos">
            <li>contato@mdsystemweb.com.br</li>
            <li>whatsapp</li>
            <li>instagram</li>
            <li>facebook</li>
          </ul>
        </div>
        <div className="FooterContent__list">
          <h3 className="FooterContent__listTitle">Seções</h3>
          <ul className="FooterContent__ul-infos">
            <Link to="inicio" smooth={true} duration={400}>
              <li>Inicio</li>
            </Link>
            <Link to={tracker[0].link} smooth={true} duration={400}>
              <li>Sobre nós</li>
            </Link>
            <Link to={tracker[1].link} smooth={true} duration={400}>
              <li>Serviços</li>
            </Link>
          </ul>
        </div>
      </div>
      <span className="FooterContent__divisor"></span>
      <span className="FooterContent__copyrights">
        ©2025{" "} <span className="FooterContent__underline"> MdSystemWeb </span> {" "}
        -
        Todos os direitos reservados
      </span>
    </section>
  );
}
