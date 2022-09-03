import styled, { css } from 'styled-components';
import { Container } from '../../styled/Utils';

export const AboutSection = styled.section`
	background: ${(props) => props.theme.colors.backgroundSecondary};
	padding-top: 5rem;

	.about-wave {
		transform: translateY(4px);
		filter: invert(100%) sepia(0%) saturate(7450%) hue-rotate(34deg)
			brightness(114%) contrast(93%);
		${(props) =>
			props.theme.name === 'dark' &&
			css`
				filter: invert(14%) sepia(4%) saturate(4583%) hue-rotate(182deg)
					brightness(94%) contrast(89%);
			`}
	}
`;

export const AboutContentWrapper = styled(Container)`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;
	text-align: center;
	${({ theme }) => theme.media.tablet} {
		flex-direction: row;
		text-align: start;
	}
`;

export const AboutInfo = styled.div`
	color: ${(props) => props.theme.colors.fontPrimary};
`;
export const AboutName = styled.h1`
	font-size: 40px;
	text-transform: uppercase;
	margin-bottom: 15px;
`;
export const AboutTitle = styled.p`
	font-size: 25px;
	margin-bottom: 10px;
`;
export const AboutDescription = styled.p`
	font-size: 18px;
	line-height: 1.4;

	span {
		display: block;
		margin-top: 10px;
	}

	a {
		color: ${(props) => props.theme.colors.pink};
	}
`;
export const AboutSocials = styled.aside`
	display: flex;
	align-items: center;
	gap: 30px;

	a {
		color: ${(props) => props.theme.colors.fontPrimary};
	}

	${({ theme }) => theme.media.tablet} {
		align-self: stretch;
		flex-direction: column;
		justify-content: space-evenly;
	}
`;
