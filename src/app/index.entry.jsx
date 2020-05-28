import ReactDOM from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { registerServiceWorker } from './sw';
import App from './app';
import '../style/main.scss';

library.add(fas);

if (process.env.NODE_ENV === 'production') {
  registerServiceWorker();
}

const app = new App();
ReactDOM.render(app.entrypoint(), document.getElementById('root'));
