import styled, { css } from 'styled-components';

export const CategoriesWrapper = styled.div`
	display: flex;
	gap: 5px;
	margin-bottom: 15px;
`;

export const Category = styled.span<{ selected?: boolean }>`
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
	cursor: pointer;

	&:not(:first-child) {
		margin-left: 8px;
	}

	&:hover {
		--p: 100%;
		color: ${({ theme: { colors } }) => colors.fontSecondary};
	}

	${({ selected, theme: { colors } }) =>
		selected &&
		css`
			color: ${() => colors.fontSecondary};
			background: ${() => colors.hoverPrimary};
		`};
`;
