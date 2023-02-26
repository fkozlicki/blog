import styled from 'styled-components';

export const ContactTitle = styled.h1`
	margin-bottom: 10px;
	color: ${({ theme: { colors } }) => colors.fontPrimary};
`;
export const ContactDescription = styled.p`
	margin-bottom: 30px;
	color: ${({ theme: { colors } }) => colors.fontPrimary};
`;
