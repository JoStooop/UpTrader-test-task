import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {HomePage} from './pages/mainPages/HomePage';
import {LayoutPage} from './pages/LayoutPage';
import {TodoPage} from './pages/mainPages/TodoPage';
import {ErrorPage} from './pages/ErrorPage';


const App = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Routes>
        <Route path='/' element={<LayoutPage/>}>
          <Route index element={<HomePage/>}/>
          <Route path='/:todoId' element={<TodoPage/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export {App};
