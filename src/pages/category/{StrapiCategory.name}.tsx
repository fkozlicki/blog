import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../../components/Layout/Layout';
import { Post } from '../../components/PostPreview/PostPreview';
import PostsSection from '../../components/PostsSection/PostsSection';
import { Container, Main } from '../../styled/Utils';

interface CategoryProps extends PageProps {
	data: {
		strapiCategory: {
			posts: Post[];
		};
	};
}

const Category: Component<CategoryProps> = ({ data, params: { name } }) => {
	const posts = data.strapiCategory.posts;
	return (
		<Layout>
			<PostsSection posts={posts} header={name} />
		</Layout>
	);
};

export const query = graphql`
	query GetCategoryPosts($name: String) {
		strapiCategory(name: { eq: $name }) {
			posts {
				excerpt
				title
				id
			}
		}
	}
`;

export default Category;
