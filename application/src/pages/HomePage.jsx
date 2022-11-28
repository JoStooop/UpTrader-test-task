import React from 'react';
import {Outlet} from 'react-router-dom';
import {Header} from '../components/header/Header';
import {Navbar} from '../components/navbar/Navbar';
import {Main} from '../components/main/Main';
import {Footer} from '../components/footer/Footer';

const HomePage = () => {
  return (
    <>
      <Header>
        <Navbar />
      </Header>
      <Main>
        <Outlet />
      </Main>
      <Footer>
        FOOTER
      </Footer>
    </>
  );
};

export {HomePage};
