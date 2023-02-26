import { GatsbyImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import React from 'react';

export const AuthorContentWrapper = styled.div`
	display: flex;
	justify-content: center;
`;
export const AuthorContent = styled.div`
	display: flex;
	gap: 30px;
`;
export const AuthorImage = styled((props) => <GatsbyImage {...props} />)`
	width: 75px;
	height: 75px;
	border: 3px solid ${({ theme: { colors } }) => colors.backgroundSecondary};
	border-radius: 100%;
`;
export const AuthorInfo = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	color: ${({ theme: { colors } }) => colors.fontPrimary};
`;
export const AuthorName = styled.p`
	font-size: 20px;
`;
export const AuthorBio = styled.p`
	color: ${({ theme: { colors } }) => colors.fontDescription};
	text-transform: uppercase;
	font-size: 14px;
	font-weight: 500;
`;
export const AuthorCreatedAt = styled.p`
	font-size: 14px;
`;
