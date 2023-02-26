import React from 'react';
import { Post } from '../PostPreview/PostPreview';
import PostsSection from '../PostsSection/PostsSection';
import * as S from './FilteredPosts.styled';

interface FilteredPostsProps {
	posts: Post[];
}

const FilteredPosts = ({ posts }: FilteredPostsProps) => {
	return posts.length > 0 ? (
		<PostsSection posts={posts} header="All Posts" />
	) : (
		<S.NoContent>There is no content you are looking for :(</S.NoContent>
	);
};

export default FilteredPosts;
