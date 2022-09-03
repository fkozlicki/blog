import styled, { css } from 'styled-components';

export const Footer = styled.footer`
	color: ${(props) => props.theme.colors.fontPrimary};

	.footer-wave {
		transform: translateY(4px);
		filter: invert(91%) sepia(16%) saturate(169%) hue-rotate(186deg)
			brightness(99%) contrast(90%);
		${(props) =>
			props.theme.name === 'dark' &&
			css`
				filter: invert(28%) sepia(25%) saturate(788%) hue-rotate(186deg)
					brightness(95%) contrast(93%);
			`}
	}
`;
export const FooterContent = styled.footer`
	padding: 15px;
	background: ${(props) => props.theme.colors.backgroundSecondary};
`;
export const FooterQuote = styled.h2`
	font-family: 'Permanent Marker', cursive;
	font-size: 30px;
	text-align: center;
	margin-bottom: 15px;
`;
export const FooterAuthor = styled.p`
	text-align: center;
	margin-bottom: 30px;
`;
export const FooterSocials = styled.div`
	display: flex;
	justify-content: space-evenly;
	font-size: 25px;
	margin-bottom: 20px;

	a {
		color: ${(props) => props.theme.colors.fontPrimary};
	}
`;
export const FooterLogo = styled.div`
	text-align: center;
	margin-bottom: 20px;

	.logo {
		${(props) =>
			props.theme.name === 'dark' &&
			css`
				filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)
					brightness(102%) contrast(102%);
			`}
	}
`;
export const FooterCopyright = styled.p`
	text-align: center;
	font-size: 14px;
`;
