import { Link } from 'gatsby';
import React from 'react';
import { BiMoon } from 'react-icons/bi';
import slugify from 'slugify';
import * as S from './MobileMenu.styled';

interface IMobileMenuProps {
  open: boolean;
  categories: [];
}

const MobileMenu = ({ open, categories }: IMobileMenuProps) => {
  return (
    <S.MobileMenu open={open}>
      <S.Box>
        <ul>
          <li>
            <Link to="/all">Wszystkie</Link>
          </li>
          <li>
            <Link to="/categories">Kategorie</Link>
          </li>
          {categories.map((category: { name: string }) => (
            <Link
              key={category.name}
              to={`/category/${slugify(category.name, { lower: true })}`}
              className="category"
            >
              {category.name}
            </Link>
          ))}
          <li>
            <Link to="/contact">Kontakt</Link>
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
