import { Link } from 'gatsby';
import React from 'react';
import slugify from 'slugify';
import { CategoriesWrapper, Category } from '../../styled/elements/Category';
import * as S from './PostPreview.styled';

export interface Post {
	id: string;
	title: string;
	excerpt: string;
	categories?: { name: string }[];
}

type PostPreviewProps = {
	post: Post;
};

const PostPreview: Component<PostPreviewProps> = ({ post }) => {
	return (
		<S.PostPreview>
			<Link
				to={`/post/${slugify(post.title, { lower: true }).replace('.', '')}`}
			>
				<S.PostPreviewTitle>{post.title}</S.PostPreviewTitle>
				<CategoriesWrapper>
					{post.categories &&
						post.categories.map((category) => (
							<Category key={category.name}>{category.name}</Category>
						))}
				</CategoriesWrapper>

				<S.PostPreviewExcerpt>{post.excerpt}</S.PostPreviewExcerpt>
			</Link>
		</S.PostPreview>
	);
};

export default PostPreview;
