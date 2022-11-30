import React from 'react';
import s from './MyWrap.module.scss';

const MyWrap = ({children}) => {
  return (
    <div className={s.wrap}>
      {children}
    </div>
  );
};

export {MyWrap};
