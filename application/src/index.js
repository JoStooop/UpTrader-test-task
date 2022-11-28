import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import {App} from './App';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import {ErrorPage} from './pages/ErrorPage';
import {TodoPage} from './pages/TodoPage';
import {Provider} from 'react-redux';
import {store} from './redux/store';

const router = createBrowserRouter([
  {
    path: '/', element: <App/>, errorElement: <ErrorPage/>, children: [
      {path: '/todo', element: <TodoPage/>},
    ],
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
      <RouterProvider router={router}/>,
    </Provider>,
);
