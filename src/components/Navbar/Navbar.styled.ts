import styled from 'styled-components';

interface ISubMenuProps {
  isOpen: boolean;
}

interface ISubMenuToggleBtnProps {
  isSubMenuOpen: boolean;
}

export const Navbar = styled.nav`
  display: flex;
  padding: 10px 0;
  margin-bottom: 30px;
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
      font-weight: 500;
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

export const Categories = styled.li`
  display: flex;
  gap: 5px;
  align-items: center;
  position: relative;
`;

export const SubMenuToggleBtn = styled.button<ISubMenuToggleBtnProps>`
  font-size: 20px;
  line-height: 0.5;
  transform: ${(props) =>
    props.isSubMenuOpen ? 'rotate(180deg)' : 'rotate(0)'};
  transition: transform 250ms ease-out, background 100ms ease-out;
  transform-origin: center;
  border-radius: 9999px;

  &:hover {
    background: #00000020;
  }
`;

export const SubMenu = styled.div<ISubMenuProps>`
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  background: white;
  padding: 10px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};
  transition: opacity 150ms ease-out, visibility 150ms ease-out;

  a {
    padding: 5px;
  }
`;
