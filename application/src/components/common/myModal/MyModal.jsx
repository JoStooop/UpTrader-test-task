import React from 'react';
import s from './MyModal.module.scss';

const MyModal = ({children, visible, setVisible}) => {
  let rootClasses = s.my_modal + ' ';

  if (visible) {
    rootClasses += s.active;
  }

  return (
    <div className={rootClasses} onClick={() => setVisible(false)}>
      <div className={s.my_modal__content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export {MyModal};
