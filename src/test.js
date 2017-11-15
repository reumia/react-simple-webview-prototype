import React from 'react';
import ReactDOM from 'react-dom';
import RouterIndex from './routers';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RouterIndex />, div);
});
