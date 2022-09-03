import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import { useThemeContext } from '../../context/ThemeContext';
import { Container } from '../../styled/Utils';
import * as S from './Footer.styled';

const Footer = () => {
	const [{ theme }] = useThemeContext();

	return (
		<S.Footer>
			<StaticImage
				src="../../images/wave2.svg"
				alt=""
				className="footer-wave"
				layout="fullWidth"
			/>
			<S.FooterContent>
				<Container>
					<S.FooterQuote>
						Wiedza jest najbardziej wartościowym towarem na świecie. Każde nowe
						odkrycie czyni nas bogatszymi.
					</S.FooterQuote>
					<S.FooterAuthor>― Kurt Vonnegut</S.FooterAuthor>
					<S.FooterSocials>
						<a href="#!">
							<BsTwitter />
						</a>
						<a href="#!">
							<BsGithub />
						</a>
						<a href="#!">
							<BsLinkedin />
						</a>
					</S.FooterSocials>
					<S.FooterLogo>
						<Link to="/">
							<StaticImage
								src="../../images/fk.svg"
								alt="logo"
								layout="constrained"
								width={90}
								className="logo"
							/>
						</Link>
					</S.FooterLogo>
					<S.FooterCopyright>
						© Filip Koźlicki {new Date().getFullYear()}
					</S.FooterCopyright>
				</Container>
			</S.FooterContent>
		</S.Footer>
	);
};

export default Footer;
