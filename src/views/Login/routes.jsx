import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './view';

const LoginRoutes = () => (
  <Route path={['/login', '/']} render={() => <LoginPage />} />
);

export default LoginRoutes;
