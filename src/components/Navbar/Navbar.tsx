import React, { useState } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { graphql, Link, useStaticQuery } from 'gatsby';
import * as S from './Navbar.styled';
import { BiChevronDown, BiMenu, BiMoon, BiSun, BiX } from 'react-icons/bi';
import MobileMenu from './MobileMenu/MobileMenu';
import { Container } from '../../styles/Global.styled';
import slugify from 'slugify';

const query = graphql`
  {
    allStrapiCategory {
      nodes {
        name
      }
    }
  }
`;

const Navbar = () => {
  const darkTheme = false;
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [subMenuOpen, setSubMenuOpen] = useState<boolean>(false);
  const {
    allStrapiCategory: { nodes: categories },
  } = useStaticQuery(query);

  const toggleMenuOpen = (): void => {
    setMenuOpen(!menuOpen);
  };

  const toggleSubMenuOpen = (): void => {
    setSubMenuOpen(!subMenuOpen);
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
            <Link to={`/all`}>Wszystkie</Link>
          </li>
          <S.Categories>
            <Link to={`/category`}>Kategorie</Link>
            <S.SubMenuToggleBtn
              isSubMenuOpen={subMenuOpen}
              onClick={toggleSubMenuOpen}
            >
              <BiChevronDown />
            </S.SubMenuToggleBtn>
            <S.SubMenu isOpen={subMenuOpen}>
              {categories.map((category: { name: string }) => (
                <Link
                  key={category.name}
                  to={`/category/${slugify(category.name, { lower: true })}`}
                >
                  {category.name}
                </Link>
              ))}
            </S.SubMenu>
          </S.Categories>
          <li>
            <Link to={`/contact`}>Kontakt</Link>
          </li>
        </S.List>
        <S.MenuButton onClick={toggleMenuOpen}>
          {menuOpen ? <BiX /> : <BiMenu />}
        </S.MenuButton>
        <S.ThemeButton>{darkTheme ? <BiMoon /> : <BiSun />}</S.ThemeButton>

        {/* MOBILE MENU */}
        <MobileMenu categories={categories} open={menuOpen} />
      </S.Navbar>
    </Container>
  );
};

export default Navbar;
