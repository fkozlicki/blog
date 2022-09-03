import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import PostsSection from '../../components/PostsSection/PostsSection';
import { Container, Main } from '../../styled/Utils';

interface CategoryProps {
	data: {
		allStrapiCategory: {
			nodes: [
				{
					name: string;
					posts: [
						{
							id: string;
							title: string;
							excerpt: string;
						}
					];
				}
			];
		};
	};
}

const Category: Component<CategoryProps> = ({ data }) => {
	const categories = data.allStrapiCategory.nodes;

	return (
		<Layout>
			{categories.map((category) => (
				<PostsSection
					key={category.name}
					header={category.name}
					posts={category.posts}
				/>
			))}
		</Layout>
	);
};

export default Category;

export const query = graphql`
	{
		allStrapiCategory {
			nodes {
				posts {
					title
					excerpt
				}
				name
			}
		}
	}
`;
