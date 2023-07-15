import { createGlobalStyle } from 'styled-components';
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.primary};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`;
export const lightTheme = {
  primary: '#1c1c1c',
  secondary: '#585757',
  tertiary: '#969696',
  border: '#e8e8e8',
  background: '#f7f7f7',
  backgroundSecondary: '#ffffff',
};
export const darkTheme = {
  primary: '#e8e8e8',
  secondary: '#bababa',
  tertiary: '#767676',
  border: '#313131',
  background: '#272727',
  backgroundSecondary: '#1a1a1a',
};
