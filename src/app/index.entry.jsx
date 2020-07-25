import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { registerServiceWorker } from '../utils/sw';
import Application from './template';

library.add(fas);

ReactDOM.render(<Application />, document.getElementById('root'));

if (process.env.NODE_ENV === 'production') {
  registerServiceWorker();
}
