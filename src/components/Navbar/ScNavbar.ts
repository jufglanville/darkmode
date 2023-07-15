import styled from 'styled-components';

export const ScNavbar = styled.nav`
  background: ${({ theme }) => theme.backgroundSecondary};
  padding: 20px 0;
  text-align: center;
  font-size: 14px;
  color: ${({ theme }) => theme.secondary};
  margin-top: 20px;
`;
