import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import { Container } from '../../styles/Global.styled';
import * as S from './Footer.styled';

const Footer = () => {
  return (
    <footer>
      <S.Wave>
        <StaticImage src="../../images/wave2.svg" alt="" layout="fullWidth" />
      </S.Wave>
      <S.Background>
        <Container>
          <S.Quote>
            Wiedza jest najbardziej wartościowym towarem na świecie. Każde nowe
            odkrycie czyni nas bogatszymi.
          </S.Quote>
          <S.Author>― Kurt Vonnegut</S.Author>
          <S.Socials>
            <a href="#!">
              <BsTwitter />
            </a>
            <a href="#!">
              <BsGithub />
            </a>
            <a href="#!">
              <BsLinkedin />
            </a>
          </S.Socials>
          <S.Logo>
            <Link to="/">
              <StaticImage
                src="../../images/fk.svg"
                alt="logo"
                layout="constrained"
                width={90}
                className="logo"
              />
            </Link>
          </S.Logo>
          <S.Copy>© Filip Koźlicki {new Date().getFullYear()}</S.Copy>
        </Container>
      </S.Background>
    </footer>
  );
};

export default Footer;
