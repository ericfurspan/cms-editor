import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { registerServiceWorker } from './sw';
import App from './app';
import '../style/main.scss';

/* add fontawesome libraries */
library.add(fas);

/* register the service worker in production */
if (process.env.NODE_ENV === 'production') {
  registerServiceWorker();
}

/* initialize the app and render to the DOM */
const app = new App();
app.initAuth();
app.initNetworkClient();
ReactDOM.render(app.entrypoint(), document.getElementById('root'));