import React, { useEffect } from 'react';
import { useHeadingsObserve } from '../../hooks/useHeadingsObserve';
import * as S from './PostContent.styled';

interface PostContentProps {
	content: {
		html: string;
		tableOfContents: string;
	};
}

const PostContent: Component<PostContentProps> = ({ content }) => {
	const { activeId } = useHeadingsObserve();

	useEffect(() => {
		const links = document.querySelectorAll(`${S.PostTableOfContents} a`); //tableOfContent linsk
		// clearing links
		links.forEach((link) => link.setAttribute('active', 'false'));
		// setting active link at tableOfContents
		const activeItem = document.querySelector(
			`[href="#${encodeURIComponent(activeId)}"]`
		);
		activeItem?.setAttribute('active', 'true');
	}, [activeId]);

	return (
		<S.ContentWrapper>
			<S.PostTableOfContents
				dangerouslySetInnerHTML={{ __html: content.tableOfContents }}
			/>
			<S.PostContent dangerouslySetInnerHTML={{ __html: content.html }} />
		</S.ContentWrapper>
	);
};

export default PostContent;
