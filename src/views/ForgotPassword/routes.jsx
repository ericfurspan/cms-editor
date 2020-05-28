import React from 'react';
import { Route } from 'react-router-dom';
import ForgotPasswordPage from './view';

const ForgotPasswordRoutes = () => (
  <Route render={() => <ForgotPasswordPage />} />
);

export default ForgotPasswordRoutes;
