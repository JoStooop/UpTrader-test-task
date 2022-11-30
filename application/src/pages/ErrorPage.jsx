import React from 'react';
import {Link} from 'react-router-dom';


const ErrorPage = () => {
  const styleWrap = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const styleButtonGoHome = {
    padding: '20px',
    borderRadius: '35px',
    color: 'white',
    backgroundColor: '#9C7A97',
  };

  return (
    <div style={styleWrap}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to='/' style={styleButtonGoHome}>HOME</Link>
    </div>
  );
};

export {ErrorPage};
