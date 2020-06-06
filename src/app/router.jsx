import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { IS_LOGGED_IN } from '../graphql/user';

const PrivacyPolicyRoute = React.lazy(() =>
  import(
    /* webpackChunkName: "PrivacyPolicy" */
    /* webpackMode: "lazy" */
    /* webpackPrefetch: true */
    '../views/PrivacyPolicy/routes'
  )
);
const TermsOfServiceRoute = React.lazy(() =>
  import(
    /* webpackChunkName: "TermsOfService" */
    /* webpackMode: "lazy" */
    /* webpackPrefetch: true */
    '../views/TermsOfService/routes'
  )
);
const ForgotPasswordRoute = React.lazy(() =>
  import(
    /* webpackChunkName: "ForgotPassword" */
    /* webpackMode: "lazy" */
    /* webpackPrefetch: true */
    '../views/ForgotPassword/routes'
  )
);
const LoginRoutes = React.lazy(() =>
  import(
    /* webpackChunkName: "Login" */
    /* webpackMode: "lazy" */
    /* webpackPrefetch: true */
    '../views/Login/routes'
  )
);
const DashboardRoutes = React.lazy(() =>
  import(
    /* webpackChunkName: "Dashboard" */
    /* webpackMode: "lazy" */
    /* webpackPrefetch: true */
    '../views/Dashboard/routes'
  )
);

const AppRouter = ({ handleLogout }) => {
  const {
    data: { isLoggedIn },
  } = useQuery(IS_LOGGED_IN);

  return (
    <Switch>
      <Route exact path="/terms" render={() => <TermsOfServiceRoute />} />

      <Route exact path="/privacy" render={() => <PrivacyPolicyRoute />} />

      <Route
        exact
        path="/forgot-password"
        render={() => <ForgotPasswordRoute />}
      />

      <Route
        exact
        path="/dashboard"
        render={() =>
          isLoggedIn ? <DashboardRoutes /> : <Redirect to="/login" />
        }
      />

      <Route
        exact
        path="/login"
        render={() => (isLoggedIn ? <DashboardRoutes /> : <LoginRoutes />)}
      />

      <Route
        exact
        path="/logout"
        render={() => {
          handleLogout();
          return <Redirect to="/login" />;
        }}
      />

      <Route
        render={() =>
          isLoggedIn ? <Redirect to="/dashboard" /> : <Redirect to="/login" />
        }
      />
    </Switch>
  );
};

export default AppRouter;
