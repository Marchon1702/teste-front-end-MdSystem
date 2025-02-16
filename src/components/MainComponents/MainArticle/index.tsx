import React, { ReactNode } from 'react';

import "./MainArticle.scss"

interface props {
    children: ReactNode 
}

export default function MainArticle({children}: props) {
  return (
    <article className="MainArticle">
      {children}
    </article>
  );
}
