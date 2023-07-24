import React from 'react';
import {Header} from '../components/header/Header';
import {Navbar} from '../components/navbar/Navbar';
import {Main} from '../components/main/Main';
import {Outlet} from 'react-router-dom';

const LayoutPage = () => {
  return (
    <>
      <Header>
        <Navbar/>
      </Header>
      <Main>
        <Outlet/>
      </Main>
    </>
  )
  ;
};

export {LayoutPage};
