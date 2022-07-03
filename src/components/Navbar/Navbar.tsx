import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import * as S from './Navbar.styled';
import { BiMenu, BiMoon, BiSun, BiX } from 'react-icons/bi';
import MobileMenu from './MobileMenu/MobileMenu';
import { Container } from '../../styles/Global.styled';

const Navbar = () => {
  const darkTheme = false;
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const toggleMenuOpen = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Container>
      <S.Navbar>
        <Link to={`/`}>
          <StaticImage
            src="../../images/fk.svg"
            alt="logo"
            width={100}
            layout="constrained"
          />
        </Link>
        <S.List>
          <li>
            <Link to={`/latest`}>Ostatnie</Link>
          </li>
          <li>
            <Link to={`/category`}>Kategorie</Link>
          </li>
          <li>
            <Link to={`/contact`}>Kontakt</Link>
          </li>
        </S.List>
        <S.MenuButton onClick={toggleMenuOpen}>
          {menuOpen ? <BiX /> : <BiMenu />}
        </S.MenuButton>
        <S.ThemeButton>{darkTheme ? <BiMoon /> : <BiSun />}</S.ThemeButton>

        {/* MOBILE MENU */}
        <MobileMenu open={menuOpen} />
      </S.Navbar>
    </Container>
  );
};

export default Navbar;
