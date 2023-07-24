import React from 'react';
import s from './MyButtonGoBack.module.scss';

const MyButtonGoBack = ({children, onClick}) => {
  return (
    <div className={s.wrap} onClick={onClick}>
      {children}
    </div>
  );
};

export {MyButtonGoBack};
