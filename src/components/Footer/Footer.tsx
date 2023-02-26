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
						New knowledge is the most valuable commodity on earth. The more
						truth we have to work with, the richer we become.
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
				</Container>
			</S.FooterContent>
		</S.Footer>
	);
};

export default Footer;
