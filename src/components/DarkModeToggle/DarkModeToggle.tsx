import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext';
import { ScDarkModeToggle, ScDarkModeToggleSlider } from './ScDarkModeToggle';

const Toggle = () => {
  const { darkTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <ScDarkModeToggle $isDarkMode={darkTheme} onClick={toggleTheme}>
      <ScDarkModeToggleSlider $isDarkMode={darkTheme} />
    </ScDarkModeToggle>
  );
};

export default Toggle;
