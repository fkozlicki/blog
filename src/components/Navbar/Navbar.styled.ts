import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  padding: 10px 0;
`;

export const List = styled.ul`
  display: none;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
  margin-left: auto;

  @media (min-width: 1024px) {
    display: flex;
  }

  li {
    height: 100%;

    a {
      height: 100%;
      display: flex;
      align-items: center;
      font-weight: 400;
      font-size: 16px;
    }
  }
`;

export const MenuButton = styled.button`
  margin-left: auto;
  font-size: 25px;
  line-height: 0.1;
  z-index: 1000;

  @media (min-width: 1024px) {
    display: none;
  }
`;

export const ThemeButton = styled.button`
  display: none;

  @media (min-width: 1024px) {
    display: inline-flex;
    align-items: center;
    font-size: 18px;
  }
`;
