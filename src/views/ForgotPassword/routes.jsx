import React from 'react';
import { Route } from 'react-router-dom';
import ForgotPassword from './view';

const ForgotPasswordRoute = () => <Route render={() => <ForgotPassword />} />;

export default ForgotPasswordRoute;
