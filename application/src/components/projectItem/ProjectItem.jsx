import React from 'react';
import s from './ProjectItem.module.scss';

const ProjectItem = ({children}) => {
  return (
    <div className={s.wrap}>
      {children}
    </div>
  );
};

export {ProjectItem};
