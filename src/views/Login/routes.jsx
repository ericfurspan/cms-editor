import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './view';

const LoginRoutes = () => (
  <Route render={() => <LoginPage />} />
);

export default LoginRoutes;
