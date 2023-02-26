import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import * as S from './About.styled';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useThemeContext } from '../../context/ThemeContext';

const About = () => {
	const [
		{
			theme: {
				colors: { backgroundPrimary },
			},
		},
	] = useThemeContext();

	return (
		<S.AboutSection>
			<S.AboutContentWrapper>
				<StaticImage
					src="../../images/avatar-normal.svg"
					alt=""
					width={400}
					height={400}
					layout="constrained"
				/>
				<S.AboutInfo>
					<S.AboutName>Filip Koźlicki</S.AboutName>
					<S.AboutTitle>React Developer</S.AboutTitle>
					<S.AboutDescription>
						Welcome to my blog! You will find here posts about frontend. If you
						are interested in web development, you've come to the right place.
						<br />
						<span>
							Want ask me a question? Write <Link to="/contact">here</Link>
						</span>
					</S.AboutDescription>
				</S.AboutInfo>
				<S.AboutSocials>
					<a href="https://github.com/fkozlicki">
						<FaGithub size={22} />
					</a>
					<a href="https://twitter.com/fkozlicki">
						<FaTwitter size={22} />
					</a>
					<a href="https://linkedin.com/in/fkozlicki/">
						<FaLinkedin size={22} />
					</a>
				</S.AboutSocials>
			</S.AboutContentWrapper>
			<S.WaveWrapper>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill={backgroundPrimary}
						fillOpacity="1"
						d="M0,192L48,208C96,224,192,256,288,266.7C384,277,480,267,576,250.7C672,235,768,213,864,192C960,171,1056,149,1152,165.3C1248,181,1344,235,1392,261.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
					></path>
				</svg>
			</S.WaveWrapper>
		</S.AboutSection>
	);
};

export default About;
