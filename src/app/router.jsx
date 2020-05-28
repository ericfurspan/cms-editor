import React from 'react';
import { Route, Switch } from 'react-router-dom';

/**
 * Lazily (dynamic) import our routes for code splitting benefits.
 * We also inject webpack "Magic Comments" for bundle enhancements (i.e chunk naming).
 *
 * for more information, see:
 *  https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules
 *  https://webpack.js.org/api/module-methods/#magic-comments
 *  https://tylermcginnis.com/react-router-code-splitting/
 *  https://v8.dev/features/dynamic-import#dynamic
 */
const LoginRoutes = React.lazy(() => import(
  /* webpackChunkName: "Login" */
  /* webpackMode: "lazy" */
  /* webpackPrefetch: true */
  '../views/Login/routes'
));
const ForgotPasswordRoutes = React.lazy(() => import(
  /* webpackChunkName: "Login" */
  /* webpackMode: "lazy" */
  /* webpackPrefetch: true */
  '../views/ForgotPassword/routes'
));
const DashboardRoutes = React.lazy(() => import(
  /* webpackChunkName: "Login" */
  /* webpackMode: "lazy" */
  /* webpackPrefetch: true */
  '../views/Dashboard/routes'
));

const AppRouter = () => (
  <Switch>
    <Route exact path="/login" render={() => <LoginRoutes />} />
    <Route exact path="/forgot-password" render={() => <ForgotPasswordRoutes />} />
    <Route exact path={[ '/dashboard', '/' ]} render={() => <DashboardRoutes />} />
  </Switch>
);

export default AppRouter;
