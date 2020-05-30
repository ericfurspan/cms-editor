import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Login, ForgotPassword, Dashboard, TermsOfService, PrivacyPolicy } from '../views';

const AppRouter = ({ auth }) => (
  <Switch>
    <Route exact path="/terms" render={() => <TermsOfService />} />
    <Route exact path="/privacy" render={() => <PrivacyPolicy />} />
    <Route exact path="/forgot-password" render={() => <ForgotPassword />} />
    <Route render={() => (auth.isAuthenticated() ? <Dashboard /> : <Login />)} />
  </Switch>
);

export default AppRouter;
