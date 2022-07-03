import styled from 'styled-components';

interface MobileMenuProps {
  open: boolean;
}

export const MobileMenu = styled.div<MobileMenuProps>`
  position: absolute;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  background: white;
  z-index: 100;
  transition: transform 250ms ease-in-out;

  transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(-100%)')};
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  height: 75%;
  width: 75%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  a {
    display: block;
    padding: 10px 20px;
    font-size: 28px;
    font-weight: 500;
  }
`;

export const ThemeButton = styled.button`
  margin-left: 25px;
  font-size: 32px;
`;
