import styled from 'styled-components';
import { Container } from '../../styled/Utils';

export const AboutSection = styled.section`
	background: ${({ theme: { colors } }) => colors.backgroundSecondary};
	padding-top: 5rem;
`;

export const WaveWrapper = styled.div`
	display: flex;
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
	color: ${({ theme: { colors } }) => colors.fontPrimary};
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
		color: ${({ theme: { colors } }) => colors.pink};
	}
`;
export const AboutSocials = styled.aside`
	display: flex;
	align-items: center;
	gap: 30px;

	a {
		color: ${({ theme: { colors } }) => colors.fontPrimary};
	}

	${({ theme }) => theme.media.tablet} {
		align-self: stretch;
		flex-direction: column;
		justify-content: space-evenly;
	}
`;
