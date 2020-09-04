import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeModeContext } from './context';

// reference - https://reactjs.org/docs/context.html#updating-context-from-a-nested-component
const ThemeModeToggle = () => (
  <ThemeModeContext.Consumer>
    {({ themeMode, toggleTheme }) => (
      <Button variant="transparent" name="theme-toggle" onClick={toggleTheme}>
        <FontAwesomeIcon icon={['fas', themeMode === 'light' ? 'moon' : 'sun']} />
      </Button>
    )}
  </ThemeModeContext.Consumer>
);

export default ThemeModeToggle;
