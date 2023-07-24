import React from 'react';
import s from './Navbar.module.scss';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  const setActive = ({isActive}) => ({
    color: isActive ? '#8BE8CB' : 'white',
  });

  return (
    <div className={s.wrap}>
      <NavLink to='/' style={setActive}>HOME</NavLink>
    </div>
  );
};

export {Navbar};
