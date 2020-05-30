import { createBrowserHistory } from 'history';

const browserHistory = createBrowserHistory();

// Implementation to restore scroll position
// https://github.com/ReactTraining/react-router/blob/master/packages/react-router-dom/docs/guides/scroll-restoration.md
browserHistory.listen(() => window.scrollTo(0, 0));

export default browserHistory;
