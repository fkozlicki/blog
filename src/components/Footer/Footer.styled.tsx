import styled, { css } from 'styled-components';

export const Footer = styled.footer`
	color: ${({ theme: { colors } }) => colors.fontPrimary};
`;
export const WaveWrapper = styled.div`
	display: flex;
`;
export const FooterContent = styled.div`
	padding: 15px;
	background: ${({ theme: { colors } }) => colors.backgroundSecondary};
`;
export const FooterQuote = styled.h2`
	font-family: Permanent Marker, cursive;
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
		color: ${({ theme: { colors } }) => colors.fontPrimary};
	}
`;
export const FooterLogo = styled.div`
	text-align: center;
	margin-bottom: 20px;

	.logo {
		${({ theme: { name } }) =>
			name === 'dark' &&
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
