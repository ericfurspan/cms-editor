import React from 'react';
import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import { registerServiceWorker } from '../utils/sw';
import Application from './template';

library.add(fas);

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  integrations: [new Integrations.BrowserTracing()],
  environment: process.env.NODE_ENV === 'production' ? 'production' : 'development',
});

ReactDOM.render(<Application />, document.getElementById('root'));

if (process.env.NODE_ENV === 'production') {
  registerServiceWorker();
}
