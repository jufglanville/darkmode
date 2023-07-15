import styled from 'styled-components';

export const ScDarkModeToggle = styled.div<{ $isDarkMode: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  background: white;
  height: 1.5rem;
  border-radius: 1rem;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  background-color: ${({ $isDarkMode }) => ($isDarkMode ? '#000' : '#ccc')};
`;

export const ScDarkModeToggleSlider = styled.div<{ $isDarkMode: boolean }>`
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%;
  transition: all 0.4s ease-in-out;
  background-color: #fff;
  transform: ${({ $isDarkMode }) =>
    $isDarkMode ? 'translateX(.75rem)' : 'translateX(-.75rem)'};
`;
