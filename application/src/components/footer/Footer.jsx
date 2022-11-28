import React from 'react';
import s from './Footer.module.scss';

const Footer = ({children}) => {
  return (
    <div className={s.wrap}>
      {children}
    </div>
  );
};

export {Footer};
