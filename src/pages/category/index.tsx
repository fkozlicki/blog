import { graphql } from 'gatsby';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import PostsSection from '../../components/PostsSection/PostsSection';
import SEO from '../../components/SEO';

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

const Category = ({ data }: CategoryProps) => {
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

export const Head = () => {
	return <SEO title="Categories" />;
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
