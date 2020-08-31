import { createContext } from 'react';

export const ThemeModeContext = createContext({
  themeMode: 'light',
  toggleTheme: () => {},
});
