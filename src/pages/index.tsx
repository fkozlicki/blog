import { graphql, PageProps } from 'gatsby';
import React from 'react';
import About from '../components/About/About';
import Layout from '../components/Layout/Layout';
import { Post } from '../components/PostPreview/PostPreview';
import PostsSection from '../components/PostsSection/PostsSection';
import SEO from '../components/SEO';

interface HomePageProps extends PageProps {
	data: {
		featured: {
			nodes: Post[];
		};
		recent: {
			nodes: Post[];
		};
	};
}

const HomePage: Component<HomePageProps> = ({ data: { featured, recent } }) => {
	return (
		<Layout coloredHeader={true} aboutComponent={<About />}>
			<PostsSection header="Featured Posts" posts={featured.nodes} />
			<PostsSection header="Last Posts" posts={recent.nodes} />
		</Layout>
	);
};

export default HomePage;

export const Head = () => <SEO />;

export const query = graphql`
	{
		featured: allStrapiPost(
			filter: { featured: { eq: true } }
			sort: { fields: createdAt, order: ASC }
		) {
			nodes {
				title
				excerpt
				categories {
					name
				}
			}
		}
		recent: allStrapiPost(
			filter: { featured: { eq: false } }
			sort: { fields: createdAt, order: ASC }
			limit: 4
		) {
			nodes {
				title
				excerpt
				categories {
					name
				}
			}
		}
	}
`;
