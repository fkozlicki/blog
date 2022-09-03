import styled from 'styled-components';

export const PostsSection = styled.section`
	:not(:last-child) {
		margin-bottom: 50px;
	}
`;

export const PostsSectionHeader = styled.h2`
	text-transform: uppercase;
	font-size: 20px;
	color: ${(props) => props.theme.colors.pink};
	margin-bottom: 20px;
`;

export const PostsContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	row-gap: 40px;
`;
