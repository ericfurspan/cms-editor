import React, { useState } from 'react';
import { Router } from 'react-router-dom';
import { ApolloProvider } from '@apollo/client';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeModeContext } from '../components/ThemeToggle/context';
import AppRouter from './router';
import createApolloClient from './apollo-client';
import { LoadSpinner } from '../components';
import history from './history';
import GlobalStyle from '../style/global';
import '../style/colors.scss';
import '../style/fonts.scss';

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
          <ThemeModeContext.Provider value={{ themeMode, toggleTheme }}>
            <StyledThemeProvider theme={{ mode: themeMode }}>
              <GlobalStyle />
              <AppRouter handleLogout={logout} />
            </StyledThemeProvider>
          </ThemeModeContext.Provider>
        </Router>
      </React.Suspense>
    </ApolloProvider>
  );
};

export default Application;
