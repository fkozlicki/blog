import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/Layout/Layout';
import PostsSection from '../components/PostsSection/PostsSection';
import { Container, Main } from '../styled/Utils';

interface AllProps extends PageProps {
	data: {
		allStrapiPost: {
			nodes: [
				{
					id: string;
					title: string;
					excerpt: string;
					categories: [{ name: string }];
				}
			];
		};
	};
}

const All: Component<AllProps> = ({ data }) => {
	const posts = data.allStrapiPost.nodes;
	return (
		<Layout>
			<PostsSection posts={posts} header="Wszystkie Posty" />
		</Layout>
	);
};

export default All;

export const query = graphql`
	{
		allStrapiPost(sort: { fields: title, order: ASC }) {
			nodes {
				title
				excerpt
				id
				categories {
					name
				}
			}
		}
	}
`;
