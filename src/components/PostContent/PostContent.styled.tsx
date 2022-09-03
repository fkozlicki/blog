import styled from 'styled-components';

export const ContentWrapper = styled.div`
	position: relative;
	max-width: 900px;
	margin: auto;
`;

export const PostTableOfContents = styled.div`
	position: absolute;
	left: 0;
	transform: translateX(-120%);
	display: none;
	height: 100%;
	width: 13vw;
	padding: 5rem 0;
	${({ theme }) => theme.media.largeDesktop} {
		display: block;
	}
	ul {
		position: sticky;
		top: 15%;
	}
	a {
		display: block;
		padding: 15px 0;
		color: ${(props) => props.theme.colors.fontPrimary};
		border-bottom: 1px solid ${(props) => props.theme.colors.borderPrimary};
	}
	a[active='true'] {
		/* TEXT GRADIENT */
		background: ${(props) => props.theme.gradients.toc};
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

		/* BORDER GRADIENT */
		border-bottom: 1px solid;
		border-image-slice: 1;
		border-width: 1px;
		border-image-source: ${(props) => props.theme.gradients.toc};
	}
`;

export const PostContent = styled.div`
	padding: 5rem 0;
	color: ${(props) => props.theme.colors.fontPrimary};
	& > * {
		:not(:last-child) {
			margin-bottom: 25px;
		}
	}

	h2 {
		font-size: 29px;
		line-height: 1;
	}

	p {
		font-size: 20px;
		line-height: 2;
	}

	ul {
		list-style: circle;
		margin-left: 25px;
	}

	li {
		font-size: 20px;
		line-height: 1.75;
	}

	a {
		color: ${(props) => props.theme.colors.pink};
	}

	.gatsby-highlight {
		margin-bottom: 50px;
		border-radius: 0.3em;
		overflow: auto;
		position: relative;
		border-top: 10px solid #384057;

		:before {
			position: absolute;
			top: 0;
			right: 5%;
			z-index: 10;
			content: attr(data-language);
			display: flex;
			align-items: center;
			justify-content: center;
			background-color: #384057;
			color: white;
			text-transform: uppercase;
			padding: 8px 16px;
			border-bottom-left-radius: 10px;
			border-bottom-right-radius: 10px;
		}

		.line-numbers-rows {
			padding: 2rem 0 2rem 2rem;
			background: none !important;
			border: none !important;
		}
	}
	.gatsby-highlight pre[class*='language-'].line-numbers {
		overflow: initial;
		padding: 2rem 2rem 2rem 4rem;
		margin: 0;
	}
	.command-line-prompt > span:before {
		color: #999;
		content: '';
		display: block;
		padding-right: 0.8em;
	}
`;
