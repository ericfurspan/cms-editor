import React, { useState } from 'react';
import { Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from 'styled-components';
import AppRouter from './router';
import createApolloClient from './apollo-client';
import { LoadSpinner, ThemeToggle } from '../components';
import history from './history';
import GlobalStyle from '../style/global';
import '../style/colors.scss';

const Application = () => {
  const client = createApolloClient();
  const [themeMode, setThemeMode] = useState('light');

  const toggleTheme = () => {
    const nextTheme = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(nextTheme);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('uid');
    client.resetStore();
  };

  return (
    <ApolloProvider client={client}>
      <React.Suspense fallback={<LoadSpinner />}>
        <Router history={history}>
          <ThemeProvider theme={{ mode: themeMode }}>
            <GlobalStyle />
            <ThemeToggle onToggleTheme={toggleTheme} />
            <AppRouter handleLogout={logout} />
          </ThemeProvider>
        </Router>
      </React.Suspense>
    </ApolloProvider>
  );
};

export default Application;
