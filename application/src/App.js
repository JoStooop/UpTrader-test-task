import React from 'react';
import {HomePage} from './pages/HomePage';


const App = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <HomePage />
    </div>
  );
};

export {App};
