import React from 'react';
import PostPreview, { IPost } from '../PostPreview/PostPreview';
import * as S from './PostsSection.styled';
import { Container } from '../../styled/Utils';

type PostsSectionProps = {
	header: string;
	posts: IPost[];
};

const PostsSection: Component<PostsSectionProps> = ({ posts, header }) => {
	return (
		<S.PostsSection>
			<S.PostsSectionHeader>{header}</S.PostsSectionHeader>
			<S.PostsContainer>
				{posts.map((post: IPost, index) => (
					<PostPreview key={index} post={post} />
				))}
			</S.PostsContainer>
		</S.PostsSection>
	);
};

export default PostsSection;
