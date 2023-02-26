import styled from 'styled-components';

export const PostPreviewTitle = styled.h3`
	font-size: 32px;
	font-weight: 500;
	margin-bottom: 4px;
	color: ${({ theme: { colors } }) => colors.fontPrimary};
`;

export const PostPreview = styled.article`
	flex: 1 1 100%;
	@media (min-width: 768px) {
		flex: 0 0 46%;
	}
	&:hover ${PostPreviewTitle} {
		color: ${({ theme: { colors } }) => colors.hoverPrimary};
	}
`;

export const PostPreviewExcerpt = styled.p`
	font-size: 18px;
	line-height: 1.3;
	color: ${({ theme: { colors } }) => colors.fontPrimary};
`;
