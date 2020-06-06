import React from 'react';
import { Route } from 'react-router-dom';
import DashboardPage from './view';

const DashboardRoutes = () => <Route render={() => <DashboardPage />} />;

export default DashboardRoutes;
