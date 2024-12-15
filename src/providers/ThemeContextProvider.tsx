import { createContext, useState, useEffect } from 'react';
import IThemeContextType from '../interfaces/Contexts/IThemeContextType';
import IThemeProviderProps from '../interfaces/Props/IThemeProviderProps';
import { ThemeList } from './ThemeListProvider';

export const ThemeContext = createContext<IThemeContextType>({
    theme: "dark",
    setTheme: () => {}
});

export const ThemeContextProvider = ({ children } : IThemeProviderProps) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  useEffect(() => {
    document.documentElement.classList.remove(...ThemeList);
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};