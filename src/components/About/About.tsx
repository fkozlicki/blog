import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import * as S from './About.styled';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';
import { useThemeContext } from '../../context/ThemeContext';

const About = () => {
	const [{ theme }] = useThemeContext();

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
						Witam Cię na moim blogu! Znajdziesz tu posty na temat HTML, CSS oraz
						JavaScript. Jeśli interesujesz się web developmentem to trafiłeś
						idealnie.
						<br />
						<span>
							Chcesz zadać mi pytanie? Pisz <Link to="/contact">tutaj</Link>
						</span>
					</S.AboutDescription>
				</S.AboutInfo>
				<S.AboutSocials>
					<a href="">
						<FaGithub size={22} />
					</a>
					<a href="">
						<FaTwitter size={22} />
					</a>
					<a href="">
						<FaLinkedin size={22} />
					</a>
				</S.AboutSocials>
			</S.AboutContentWrapper>
			<StaticImage
				src="../../images/wave.svg"
				alt=""
				className="about-wave"
				layout="fullWidth"
			/>
		</S.AboutSection>
	);
};

export default About;
