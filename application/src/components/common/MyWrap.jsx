import React from 'react';

const MyWrap = ({children}) => {
  return (
    <div style={{width: '1700px'}}>
      {children}
    </div>
  );
};

export {MyWrap};
