import { graphql } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import Author from '../../components/Author/Author';
import Layout from '../../components/Layout/Layout';
import PostContent from '../../components/PostContent/PostContent';
import PostTitle from '../../components/PostTitle/PostTitle';
import { Container, Main } from '../../styled/Utils';

interface PostProps {
	data: {
		strapiPost: {
			title: string;
			author: {
				name: string;
				bio: string;
				photo: {
					localFile: {
						childImageSharp: {
							gatsbyImageData: IGatsbyImageData;
						};
					};
				};
			};
			categories: { name: string; id: string }[];
			createdAt: string;
			readingTime: string;
			content: {
				data: {
					childMarkdownRemark: {
						tableOfContents: string;
						html: string;
					};
				};
			};
		};
	};
}

const Post: Component<PostProps> = ({ data: { strapiPost: post } }) => {
	return (
		<Layout>
			<PostTitle
				title={post.title}
				readingTime={post.readingTime}
				categories={post.categories}
			/>
			<Author author={post.author} createdAt={post.createdAt} />
			<PostContent content={post.content.data.childMarkdownRemark} />
		</Layout>
	);
};

export default Post;

export const query = graphql`
	query GetSinglePost($title: String) {
		strapiPost(title: { eq: $title }) {
			title
			author {
				name
				bio
				photo {
					localFile {
						childImageSharp {
							gatsbyImageData(
								layout: CONSTRAINED
								placeholder: TRACED_SVG
								height: 64
								width: 64
							)
						}
					}
				}
			}
			categories {
				id
				name
			}
			createdAt(locale: "PL", formatString: "LL")
			readingTime
			content {
				data {
					childMarkdownRemark {
						tableOfContents
						html
					}
				}
			}
		}
	}
`;
