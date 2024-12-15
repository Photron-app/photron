import React, { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeContextProvider';
import TitleComponent from '../components/TitleComponent';
import SubTitleComponent from '../components/SubTitleComponent';
import { ThemeList } from '../providers/ThemeListProvider';

export default function Settings() {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newTheme = e.target.value as string;
    setTheme(newTheme);
  };
  return (
    <>
       <TitleComponent title="Settings" description="Here you're able to change themes and more settings..."/> 
       <SubTitleComponent title="Themes:" />
       <select
          id="theme"
          value={theme}
          onChange={handleThemeChange}
          className="px-4 py-2 rounded border bg-background text-text focus:outline-none"
        >
          {ThemeList.map((themeOption) => (
            <option key={themeOption} value={themeOption}>
              {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
            </option>
          ))}
        </select>
        <SubTitleComponent title="Set SSH directory:" />
    </>
  );
};
