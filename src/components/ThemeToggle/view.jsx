import React from 'react';
import { StyledThemeToggleBtn, StyledThemeToggleIcon } from './style';

const ThemeToggle = ({ onToggleTheme }) => {
  return (
    <StyledThemeToggleBtn
      aria-label="Toggle theme"
      size="sm"
      name="theme-toggle"
      variant="outline-primary"
      onClick={() => onToggleTheme()}
    >
      <StyledThemeToggleIcon size="lg" icon={['fas', 'adjust']} />
    </StyledThemeToggleBtn>
  );
};

export default ThemeToggle;
