import React from 'react';

import './index.css';

export const Container = ({ children }) => (
  <div className='container'>{children}</div>
);

export const Title = ({ children }) => (
  <span className='title'>{children}</span>
);
