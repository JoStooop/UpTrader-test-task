import React from 'react';
import {Header} from '../components/header/Header';
import {Navbar} from '../components/navbar/Navbar';
import {Main} from '../components/main/Main';
import {Outlet} from 'react-router-dom';
import {Footer} from '../components/footer/Footer';

const LayoutPage = () => {
  return (
    <>
      <Header>
        <Navbar/>
      </Header>
      <Main>
        <Outlet/>
      </Main>
      <Footer />
    </>
  )
  ;
};

export {LayoutPage};
