import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ThemeModeContext } from './context';

// reference - https://reactjs.org/docs/context.html#updating-context-from-a-nested-component
const ThemeModeToggle = () => (
  <ThemeModeContext.Consumer>
    {({ themeMode, toggleTheme }) => (
      <Button
        variant="transparent"
        name="theme-toggle"
        onClick={toggleTheme}
        className="pl-4 w-100 text-left"
      >
        <FontAwesomeIcon icon={['fas', themeMode === 'light' ? 'moon' : 'sun']} className="mr-2" />
        <span>{themeMode === 'light' ? 'Dark' : 'Light'} Mode</span>
      </Button>
    )}
  </ThemeModeContext.Consumer>
);

export default ThemeModeToggle;
