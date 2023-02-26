import { graphql, PageProps } from 'gatsby';
import React, { useState } from 'react';
import FilteredPosts from '../components/FilteredPosts/FilteredPosts';
import Layout from '../components/Layout/Layout';
import PostsSection from '../components/PostsSection/PostsSection';
import Search from '../components/Search/Search';
import SEO from '../components/SEO';

interface AllPostsProps extends PageProps {
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
		allStrapiCategory: { nodes: { name: string }[] };
	};
}

const AllPosts = ({ data }: AllPostsProps) => {
	const posts = data.allStrapiPost.nodes;
	const categories = data.allStrapiCategory.nodes.map(
		(category) => category.name
	);
	const [input, setInput] = useState<string>('');
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	const filteredPosts = posts.filter((post) => {
		const lowerCaseInput = input.toLowerCase();

		if (selectedCategories.length > 0) {
			return (
				(post.title.toLowerCase().includes(lowerCaseInput) ||
					post.excerpt.includes(lowerCaseInput)) &&
				selectedCategories.some((selected) =>
					post.categories.map((category) => category.name).includes(selected)
				)
			);
		}
		return (
			post.title.toLowerCase().includes(lowerCaseInput) ||
			post.excerpt.includes(lowerCaseInput)
		);
	});

	const toggleSelectCategory = (selected: string) => {
		if (selectedCategories.includes(selected)) {
			setSelectedCategories((prev) =>
				prev.filter((category) => category !== selected)
			);
		} else {
			setSelectedCategories((prev) => [...prev, selected]);
		}
	};

	const changeInput = (text: string) => {
		setInput(text);
	};

	const isSelected = (selected: string) =>
		selectedCategories.includes(selected);

	return (
		<Layout>
			<Search
				changeInput={changeInput}
				categories={categories}
				toggleSelectCategory={toggleSelectCategory}
				isSelected={isSelected}
			/>
			<FilteredPosts posts={filteredPosts} />
		</Layout>
	);
};

export default AllPosts;

export const Head = () => <SEO title="Filip Kozlicki | All posts" />;

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
		allStrapiCategory {
			nodes {
				name
			}
		}
	}
`;
