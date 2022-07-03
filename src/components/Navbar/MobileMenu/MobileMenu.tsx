import { Link } from 'gatsby';
import React from 'react';
import { BiMoon } from 'react-icons/bi';
import * as S from './MobileMenu.styled';

const MobileMenu = ({ open }: { open: boolean }) => {
  return (
    <S.MobileMenu open={open}>
      <S.Box>
        <ul>
          <li>
            <Link to={`latest`}>Ostatnie</Link>
          </li>
          <li>
            <Link to={`categories`}>Kategorie</Link>
          </li>
          <li>
            <Link to={`contact`}>Contact</Link>
          </li>
        </ul>
        <S.ThemeButton>
          <BiMoon />
        </S.ThemeButton>
      </S.Box>
    </S.MobileMenu>
  );
};

export default MobileMenu;
