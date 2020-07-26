import React from 'react';
import { StyledThemeToggleBtn, StyledThemeToggleIcon } from './style';

const ThemeToggle = ({ onToggleTheme }) => {
  return (
    <StyledThemeToggleBtn
      aria-label="Toggle theme"
      size="sm"
      name="theme-toggle"
      variant="transparent"
      onClick={() => onToggleTheme()}
    >
      <StyledThemeToggleIcon size="lg" icon={['fas', 'sun']} />
    </StyledThemeToggleBtn>
  );
};

export default ThemeToggle;
