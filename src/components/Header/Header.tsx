import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import Navbar from '../Navbar/Navbar';
import * as S from './Header.styled';

const Header = () => {
  return (
    <S.Header>
      <Navbar />

      <StaticImage
        src="../../images/wave.svg"
        alt=""
        layout="fullWidth"
        class="wave"
      />
    </S.Header>
  );
};

export default Header;
