import React from 'react';
import { Route } from 'react-router-dom';
import DashboardPage from './view';

const DashboardRoutes = ({ uid }) => <Route render={() => <DashboardPage uid={uid} />} />;

export default DashboardRoutes;
