import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import RouterIndex from './routers'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<RouterIndex />, document.getElementById('root'));
registerServiceWorker();
