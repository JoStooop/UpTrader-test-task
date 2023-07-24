import React from 'react';
import s from './MyButton.module.scss';

const MyButton = ({children, ...rest}) => {
  return (
    <button className={s.button} {...rest}>
      {children}
    </button>
  );
};

export {MyButton};
