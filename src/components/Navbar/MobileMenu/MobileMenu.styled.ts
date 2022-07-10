import styled from 'styled-components';

interface MobileMenuProps {
  open: boolean;
}

export const MobileMenu = styled.div<MobileMenuProps>`
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  top: 0;
  background: white;
  z-index: 100;
  transform: ${(props) => (props.open ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 250ms ease-in-out;

  @media (min-width: 1024px) {
    display: none;
  }
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

  .category {
    font-size: 24px;
    padding-left: 40px;
  }
`;

export const ThemeButton = styled.button`
  margin-left: 25px;
  font-size: 32px;
`;
