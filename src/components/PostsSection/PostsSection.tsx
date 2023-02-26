import React from 'react';
import PostPreview, { Post } from '../PostPreview/PostPreview';
import * as S from './PostsSection.styled';

type PostsSectionProps = {
	header: string;
	posts: Post[];
};

const PostsSection: Component<PostsSectionProps> = ({ posts, header }) => {
	return (
		<S.PostsSection>
			<S.PostsSectionHeader>{header}</S.PostsSectionHeader>
			<S.PostsContainer>
				{posts.map((post: Post, index) => (
					<PostPreview key={index} post={post} />
				))}
			</S.PostsContainer>
		</S.PostsSection>
	);
};

export default PostsSection;
