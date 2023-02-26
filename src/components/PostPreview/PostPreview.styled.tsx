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

export const PostPreviewBadges = styled.div`
	display: flex;
	gap: 5px;
	margin-bottom: 15px;
`;

export const PostPreviewBadge = styled.span`
	padding: 2px 6px;
	font-size: 13px;
	color: ${({ theme: { colors } }) => colors.fontPrimary};
	border: 1px solid gray;
	border-radius: 9999px;
	background: linear-gradient(
			${({ theme: { colors } }) => colors.hoverPrimary} 0 0
		)
		var(--p, 0) / var(--p, 0) no-repeat;
	transition: 0.3s, background-position 0s;

	&:not(:first-child) {
		margin-left: 8px;
	}

	&:hover {
		--p: 100%;
		color: ${({ theme: { colors } }) => colors.fontSecondary};
	}
`;

export const PostPreviewExcerpt = styled.p`
	font-size: 18px;
	line-height: 1.3;
	color: ${({ theme: { colors } }) => colors.fontPrimary};
`;
