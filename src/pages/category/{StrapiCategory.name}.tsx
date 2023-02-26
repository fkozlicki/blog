import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Layout from '../../components/Layout/Layout';
import { Post } from '../../components/PostPreview/PostPreview';
import PostsSection from '../../components/PostsSection/PostsSection';
import SEO from '../../components/SEO';

interface CategoryProps extends PageProps {
	data: {
		strapiCategory: {
			posts: Post[];
			name: string;
		};
	};
}

const Category = ({
	data: {
		strapiCategory: { posts, name },
	},
}: CategoryProps) => {
	return (
		<Layout>
			<PostsSection posts={posts} header={name} />
		</Layout>
	);
};

export const Head = ({
	data: {
		strapiCategory: { name },
	},
}: CategoryProps) => {
	return <SEO title={`${name} posts`} />;
};

export const query = graphql`
	query GetCategoryPosts($name: String) {
		strapiCategory(name: { eq: $name }) {
			posts {
				excerpt
				title
				id
			}
			name
		}
	}
`;

export default Category;
