import { useContext } from 'react';
import styled from 'styled-components';

import { ThemeContext } from '../../contexts/ThemeContext';

const ThemeSwitcher = () => {
  // Accedemos a los valores de ThemeContext
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <ThemeLink className="theme-button" role="button" onClick={toggleTheme}>
      {theme === 'dark' ? '🌞' : '🌚'}
    </ThemeLink>
  );
};

const ThemeLink = styled.a`
  cursor: pointer;
  color: currentcolor;
`;

export default ThemeSwitcher;
