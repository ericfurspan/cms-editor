import React from 'react';
import { Route } from 'react-router-dom';
import PrivacyPolicy from './view';

const PrivacyPolicyRoute = () => <Route render={() => <PrivacyPolicy />} />;

export default PrivacyPolicyRoute;
