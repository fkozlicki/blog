import { Link } from 'gatsby';
import React from 'react';
import { BsTwitter, BsGithub, BsLinkedin } from 'react-icons/bs';
import { useThemeContext } from '../../context/ThemeContext';
import { Container } from '../../styled/Utils';
import * as S from './Footer.styled';

const Footer = () => {
	const [
		{
			theme: {
				colors: { backgroundSecondary, fontPrimary },
			},
		},
	] = useThemeContext();

	return (
		<S.Footer>
			<S.WaveWrapper>
				<S.FooterWave xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
					<path
						fill={backgroundSecondary}
						fillOpacity="1"
						d="M0,256L48,213.3C96,171,192,85,288,90.7C384,96,480,192,576,213.3C672,235,768,181,864,138.7C960,96,1056,64,1152,80C1248,96,1344,160,1392,192L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
					></path>
				</S.FooterWave>
			</S.WaveWrapper>
			<S.FooterContent>
				<Container>
					<S.FooterQuote>
						New knowledge is the most valuable commodity on earth. The more
						truth we have to work with, the richer we become.
					</S.FooterQuote>
					<S.FooterAuthor>― Kurt Vonnegut</S.FooterAuthor>
					<S.FooterSocials>
						<a href="https://github.com/fkozlicki">
							<BsTwitter />
						</a>
						<a href="https://twitter.com/fkozlicki">
							<BsGithub />
						</a>
						<a href="https://linkedin.com/in/fkozlicki/">
							<BsLinkedin />
						</a>
					</S.FooterSocials>
					<S.FooterLogo>
						<Link to="/">
							<svg
								width="90"
								height="39"
								viewBox="0 0 230 100"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clipPath="url(#clip0_8_14)">
									<path
										d="M27.8125 51.1875L16.9688 67.9375V51.1875H8.8125V96H16.9688V82.9375L19.75 78.625L27.9062 96H36.9375L24.9688 70.5625L37.5 51.1875H27.8125ZM58.3438 82.75C58.3438 84.1667 57.8438 85.3646 56.8438 86.3438C55.8438 87.3438 54.6458 87.8438 53.25 87.8438C51.8333 87.8438 50.6354 87.3438 49.6562 86.3438C48.6562 85.3646 48.1562 84.1667 48.1562 82.75V64.4062C48.1562 63.0104 48.6562 61.8125 49.6562 60.8125C50.6354 59.8125 51.8333 59.3125 53.25 59.3125C54.6458 59.3125 55.8438 59.8125 56.8438 60.8125C57.8438 61.8125 58.3438 63.0104 58.3438 64.4062V82.75ZM53.25 51.1875C49.6042 51.1875 46.4792 52.4792 43.875 55.0625C41.2917 57.6458 40 60.7604 40 64.4062V82.75C40 86.3958 41.2917 89.5208 43.875 92.125C46.4792 94.7083 49.6042 96 53.25 96C56.8958 96 60.0104 94.7083 62.5938 92.125C65.1979 89.5208 66.5 86.3958 66.5 82.75V64.4062C66.5 60.7604 65.1979 57.6458 62.5938 55.0625C60.0104 52.4792 56.8958 51.1875 53.25 51.1875ZM71.1875 51.1875V59.3125H85.3125L69 96H95.6562V87.8438H81.5312L97.8438 51.1875H71.1875ZM103.5 51.1875V96H127.938V87.8438H111.656V51.1875H103.5ZM133.562 96H141.719V51.1875H133.562V96ZM160.625 51.1875C156.979 51.1875 153.854 52.4792 151.25 55.0625C148.667 57.6458 147.375 60.7604 147.375 64.4062V82.75C147.375 86.3958 148.667 89.5208 151.25 92.125C153.854 94.7083 156.979 96 160.625 96C164.271 96 167.385 94.7083 169.969 92.125C172.573 89.5208 173.875 86.3958 173.875 82.75V81.75H165.719V82.75C165.719 84.1667 165.219 85.3646 164.219 86.3438C163.219 87.3438 162.021 87.8438 160.625 87.8438C159.208 87.8438 158.01 87.3438 157.031 86.3438C156.031 85.3646 155.531 84.1667 155.531 82.75V64.4062C155.531 63.0104 156.031 61.8125 157.031 60.8125C158.01 59.8125 159.208 59.3125 160.625 59.3125C162.021 59.3125 163.219 59.8125 164.219 60.8125C165.219 61.8125 165.719 63.0104 165.719 64.4062V65.4375H173.875V64.4062C173.875 60.7604 172.573 57.6458 169.969 55.0625C167.385 52.4792 164.271 51.1875 160.625 51.1875ZM198.5 51.1875L187.656 67.9375V51.1875H179.5V96H187.656V82.9375L190.438 78.625L198.594 96H207.625L195.656 70.5625L208.188 51.1875H198.5ZM213.812 96H221.969V51.1875H213.812V96Z"
										fill={fontPrimary}
									/>
									<path
										d="M8.8125 3.1875V48H16.9688V29.6562H31.2188V21.5H16.9688V11.3125H35.3125V3.1875H8.8125ZM9.84375 4.1875H34.2812V10.3125H15.9375V22.5312H30.2188V28.6562H15.9375V46.9688H9.84375V4.1875ZM39.0175 48H47.1737V3.1875H39.0175V48ZM40.0487 4.1875H46.1425V46.9688H40.0487V4.1875ZM50.91 3.1875V48H75.3475V39.8438H59.0662V3.1875H50.91ZM51.9412 4.1875H58.035V40.875H74.3475V46.9688H51.9412V4.1875ZM79.0525 48H87.2087V3.1875H79.0525V48ZM80.0837 4.1875H86.1775V46.9688H80.0837V4.1875ZM99.1012 22.5312V11.3125H104.695C106.091 11.3125 107.289 11.8125 108.289 12.8125C109.289 13.8125 109.789 15.0104 109.789 16.4062V17.4375C109.789 18.8333 109.289 20.0312 108.289 21.0312C107.289 22.0312 106.091 22.5312 104.695 22.5312H99.1012ZM90.945 3.1875V48H99.1012V30.6875H104.695C108.341 30.6875 111.466 29.3958 114.07 26.8125C116.653 24.2083 117.945 21.0833 117.945 17.4375V16.4062C117.945 12.7604 116.653 9.64583 114.07 7.0625C111.466 4.47917 108.341 3.1875 104.695 3.1875H90.945ZM98.07 23.5625H104.695C106.382 23.5625 107.82 22.9583 109.007 21.75C110.216 20.5625 110.82 19.125 110.82 17.4375V16.4062C110.82 14.7396 110.216 13.3021 109.007 12.0938C107.82 10.9062 106.382 10.3125 104.695 10.3125H98.07V23.5625ZM104.695 4.1875C108.07 4.1875 110.955 5.38542 113.351 7.78125C115.726 10.1771 116.914 13.0521 116.914 16.4062V17.4375C116.914 20.8125 115.726 23.6979 113.351 26.0938C110.955 28.4688 108.07 29.6562 104.695 29.6562H98.07V46.9688H91.9762V4.1875H104.695Z"
										fill={fontPrimary}
									/>
								</g>
								<defs>
									<clipPath id="clip0_8_14">
										<rect width="230" height="100" fill="white" />
									</clipPath>
								</defs>
							</svg>
						</Link>
					</S.FooterLogo>
				</Container>
			</S.FooterContent>
		</S.Footer>
	);
};

export default Footer;
