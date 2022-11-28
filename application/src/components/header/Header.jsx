import React from 'react';
import s from './Header.module.scss';

const Header = ({children}) => {
  return (
    <header className={s.wrap}>
      {children}
    </header>
  );
};

export {Header};
