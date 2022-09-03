import { Link } from 'gatsby';
import React from 'react';
import slugify from 'slugify';
import * as S from './PostPreview.styled';

export interface IPost {
	id: string;
	title: string;
	excerpt: string;
	categories?: { name: string }[];
}

type PostPreviewProps = {
	post: IPost;
};

const PostPreview: Component<PostPreviewProps> = ({ post }) => {
	return (
		<S.PostPreview>
			<Link
				to={`/post/${slugify(post.title, { lower: true }).replace('.', '')}`}
			>
				<S.PostPreviewTitle>{post.title}</S.PostPreviewTitle>
				<S.PostPreviewBadges>
					{post.categories &&
						post.categories.map((category) => (
							<S.PostPreviewBadge key={category.name}>
								{category.name}
							</S.PostPreviewBadge>
						))}
				</S.PostPreviewBadges>

				<S.PostPreviewExcerpt>{post.excerpt}</S.PostPreviewExcerpt>
			</Link>
		</S.PostPreview>
	);
};

export default PostPreview;
