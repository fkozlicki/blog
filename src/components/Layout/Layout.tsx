import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import * as S from './Layout.styled';

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <S.GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
